# Persona Lab starter

An intentionally low-fidelity, connected paper prototype for the Codex Masterclass exercise.

For the participant workflow and copyable prompts, see [WORKSHOP-GUIDE.md](./WORKSHOP-GUIDE.md).

Participants turn three connected paper sketches (Landing, Workspace, and Results) into a website using the supplied fictional assets and copy.

## Preview in your Codex sandbox

Ask Codex to start a preview in your sandbox and return a browser-accessible URL. The repository's [agent guidance](AGENTS.md) describes the workshop VM preview setup.

```text
Start a preview of this Persona Lab starter in my sandbox. Follow the
repository's preview instructions and give me a browser-accessible URL.
```

## Deployed paper prototype

The [GitHub Pages site](https://shinew2.github.io/persona-lab/) opens the
clickable paper mock. Pushes to `main` build the static site, check its
repository-relative asset paths, and publish the `dist` output automatically.
Pull requests run the same build and path checks without deploying.

## Prepared paper prototype and asset pack

The preview opens the paper mock at `/`. You can also visit
`/workshop/mock/index.html` for the connected
pencil-sketch mock, `/workshop/index.html` for the supplied brand logo,
characters, client stories, and supporter logos, and
`/workshop/instructions.html` for the workshop prompts.

See [the asset map](public/workshop/ASSETS.md). No participant uploads or
image generation are required. The paper prototype is a design reference,
not a finished website. There is no separate application mock.

## Exercise boundaries

- This app has no real browser or model integration.
- The sample journey and rationale are simulated; they are not human research.
- Deployment publishes the existing paper prototype and workshop assets without changing their content.
