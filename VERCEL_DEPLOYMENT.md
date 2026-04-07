# Vercel Deployment for Host + Remotes

This monorepo deploys best as three independent Vercel projects:

- `apps/host`
- `apps/remote-skills`
- `apps/remote-projects`

## 1) Create Vercel Projects

Create one Vercel project per app and set the **Root Directory**:

- Host -> `apps/host`
- Skills remote -> `apps/remote-skills`
- Projects remote -> `apps/remote-projects`

The two remotes include `vercel.json` and will publish static webpack output from `dist`.

## 2) Host Environment Variables

Set these in the **host** Vercel project:

- `NEXT_PUBLIC_SKILLS_REMOTE_URL=https://<skills-domain>`
- `NEXT_PUBLIC_PROJECTS_REMOTE_URL=https://<projects-domain>` (optional now, recommended for future remote usage)

Example:

- `NEXT_PUBLIC_SKILLS_REMOTE_URL=https://remote-skills.vercel.app`
- `NEXT_PUBLIC_PROJECTS_REMOTE_URL=https://remote-projects.vercel.app`

The loader appends `/remoteEntry.js`, so the env value should be the base URL only.

## 3) Optional Preview Strategy (PR-to-PR matching remotes)

For preview deployments, point host preview env vars to preview deployments of remotes from the same branch/PR.

Recommended approach:

1. Keep Production env vars pointing to production remote domains.
2. For Preview env vars in host, set values to preview aliases of remotes (or branch domains) so host preview consumes preview remotes.
3. Promote/merge remotes first, then host for stable production rollout.

Practical options:

- **Simple/manual:** Update host Preview env vars to current remote preview URLs when validating a PR.
- **Automated:** Use CI to compute branch-specific remote preview domains and call Vercel API to set host Preview env vars per branch.

## 4) Verification Checklist

- Open host preview URL and confirm `/skills` loads.
- In browser network tab, verify `remoteEntry.js` loads from remote domains (not localhost).
- Confirm no CORS errors for `remoteEntry.js` or remote chunks.
