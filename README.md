# Incenta Docs

The official documentation site for [Incenta](https://incenta.dev) — a referral and incentive platform. Built with [Next.js](https://nextjs.org) + [Nextra](https://nextra.site).

**Live site:** [https://docs.incenta.dev](https://docs.incenta.dev)

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16.2.9 | Framework |
| Nextra | ^4.5.1 | Documentation framework (MDX) |
| nextra-theme-docs | ^4.5.1 | Docs theme (navbar, sidebar, search) |
| React | 19.2.4 | UI library |
| Tailwind CSS | ^4 | Styling |
| Pagefind | ^1.5.2 | Static search indexing |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Content Structure

All documentation lives in `src/content/` as MDX files.

```
src/content/
├── _meta.js            # Sidebar navigation config
├── index.mdx           # Overview
├── quickstart.mdx      # Quickstart guide
├── auth.mdx            # Authentication
├── api-reference.mdx   # Full API reference
├── ui-bundles.mdx      # Embeddable UI widgets
├── pricing.mdx         # Pricing & plans
├── webhooks.mdx        # Webhook events & signatures
└── examples.mdx        # Integration examples
```

### Adding a new page

1. Create a new `.mdx` file in `src/content/`.
2. Add an entry in `src/content/_meta.js` with the filename (without extension) as key and the sidebar label as value.
3. The page is automatically available at `/docs/<filename>`.

### Writing documentation

- Use standard Markdown with MDX extensions (components, JSX).
- Code blocks should include a language tag for syntax highlighting.
- API endpoints should include method badges (e.g. `GET`, `POST`).
- Use `> **Note:**` and `> **Warning:**` for callouts.

---

## Reporting Issues

Found a bug, typo, or missing content? Open an issue on GitHub:

[https://github.com/MILANydv/docs_incenta/issues](https://github.com/MILANydv/docs_incenta/issues)

**When writing an issue:**

- Use a clear, descriptive title.
- For typos or content fixes, include the page URL and the exact text to fix.
- For technical errors (broken code samples, wrong API responses), include the endpoint and expected vs actual behavior.
- Label your issue appropriately if possible (bug, enhancement, docs).

---

## Contributing

1. Fork the repo and create a feature branch.
2. Make your changes (content in `src/content/`, styles in `src/app/`).
3. Run `npm run lint` to check for issues.
4. Run `npm run build` to verify the site builds cleanly.
5. Open a pull request against `main`.

### Pull request guidelines

- Keep PRs focused — one topic per PR.
- Reference related issues in the description.
- For content changes, include a short summary of what was updated and why.

---

## AI Agents

This project uses a very new version of Next.js (16.x). If you are an AI coding agent, read the bundled guides in `node_modules/next/dist/docs/` before writing any code — APIs, conventions, and file structure may differ from your training data. See [`AGENTS.md`](./AGENTS.md).

---

## License

MIT © Incenta
