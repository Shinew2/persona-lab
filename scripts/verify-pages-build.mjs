import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const output = resolve('dist');
const siteRoot = new URL('https://shinew2.github.io/persona-lab/');
const mockUrl = new URL('workshop/mock/index.html', siteRoot);

function fileAt(path) {
  const url = new URL(path, siteRoot);
  assert.ok(url.pathname.startsWith(siteRoot.pathname), `${path} escapes the repository path`);
  const file = resolve(output, url.pathname.slice(siteRoot.pathname.length));
  assert.ok(existsSync(file), `Missing Pages asset: ${url.pathname}`);
  return file;
}

const entry = readFileSync(fileAt('index.html'), 'utf8');
assert.match(entry, /href="workshop\/mock\/index\.html"/);
assert.match(entry, /location\.replace\('workshop\/mock\/index\.html' \+ location\.hash\)/);
assert.equal(mockUrl.pathname, '/persona-lab/workshop/mock/index.html');

const mock = readFileSync(fileAt('workshop/mock/index.html'), 'utf8');
const mockImages = [...mock.matchAll(/image:'([^']+)'/g)];
assert.equal(mockImages.length, 3, 'Expected three paper mock screens');
for (const [, image] of mockImages) {
  fileAt(`workshop/mock/${image}`);
}
assert.match(mock, /href="#landing"/);
assert.match(mock, /href="#workspace"/);
assert.match(mock, /href="#results"/);

fileAt('workshop/index.html');
fileAt('workshop/instructions.html');
fileAt('workshop/guide.txt');
const content = JSON.parse(readFileSync(fileAt('workshop/content.json'), 'utf8'));
const assets = [
  content.brand.logo,
  ...content.team.map(({ image }) => image),
  ...content.customers.flatMap(({ logo, image }) => [logo, image]),
  ...content.supporters.map(({ logo }) => logo),
  ...content.extraCharacters.map((name) => `characters/${name}.png`),
];
for (const asset of assets) fileAt(`workshop/${asset}`);

console.log(`Pages output verified at ${siteRoot.href}`);
