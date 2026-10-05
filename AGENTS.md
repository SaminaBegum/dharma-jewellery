<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the uploaded Dharma storefront's page routes and shared local cart context; this preserves its existing visual and shopping model.
- Store uploaded product imagery through asset pointers rather than repository binaries; this keeps the source tree lightweight.
- Treat checkout as a local demonstration until a live payment and order service is explicitly connected; no payment credentials are collected.
