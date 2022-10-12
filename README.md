# Mihai Cristian Cună's (mccună) personal website

The source code for my website which is hosted at [mccuna.com](https://mccuna.com).

## Running the app locally

This repo uses `pnpm` as a package manager. If you don't have it installed, check their docs [here](https://pnpm.io/installation).

1. `pnpm install`
2. `pnpm dev`.
   - This starts multiple processes behind the scenes:
     - `pnpm dev:css` - builds the `tailwindcss` classes and watches for changes
     - `pnpm dev:remix` - builds the `remix` app and watches for changes
     - `pnpm dev:miniflare` - starts running the `remix` app using `miniflare`
   - Before starting the above processes it also runs a `pnpm build` to create a production build. This is needed because `miniflare` will throw an error if it finds no app to run
   - **The `wrangler.toml` file contains only the public env variables. Besides them, the app need some secret env variables too (check `wrangler.example.toml` for the whole list). Unfortunately I cannot include them in this public repo because because, yeah, they're secrets 😄**

If for some reason you need to debug the server-side part, the `launch.json` file is already configured to run `pnpm dev` in debug mode.

## Testing

Run `pnpm test` to run the tests. Most of the tests are visual tests using `playwright`.

## Technical details

### Technologies used

- [React](https://reactjs.org/)
  - My favorite Javascript library for building user interfaces.
- [Remix](https://remix.run/)
  - Full-stack framework using React. I love it because it aims to use web standards as much as possible and brings a great deal of simplicity to building web apps.
- [Cloudflare workers](https://workers.cloudflare.com/)
  - Web standards + edge computing? I want 2 please!
- [Tailwind CSS](https://tailwindcss.com/)
  - The easiest and fastest way to style an app at the moment.
- [TypeScript](https://www.typescriptlang.org/)
  - Who still uses plain Javascript nowadays? 😅
- [faunadb](https://fauna.com/)
  - A serverless database that synergies with cloudflare workers. Used just for logs at the moment.
- [playwright](https://playwright.dev/)
  - Favorite E2E testing library.

### Services used

- [Cloudflare workers](https://workers.cloudflare.com/)
  - 😄
- [Cloudflare images](https://www.cloudflare.com/products/cloudflare-images/)
  - Images CDN
- [unDraw](https://undraw.co/)
  - Cool open-source illustrations
- [hCaptcha](https://www.hcaptcha.com/)
  - Anti-bot service (aka source of funny animals pictures)
- [mailersend](https://www.mailersend.com/)
  - Everybody needs a good email service

## Notes

- I'm a big fan of splitting things into smaller parts. Because of this, each individual export from a route is present in its own file (e.g. `contact.tsx` and `contact.action.ts`). The `settings.json` file is configured to nest the exports under the route in order to prevent clogging up the `routes` folder. `remix.config.js` is also configured to not create individual routes for these exports
