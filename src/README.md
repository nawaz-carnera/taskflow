# TaskFlow — Source Architecture

## Routing: Expo Router

We use **Expo Router** for file-based routing. Our source is split into two top-level directories:

- **`app/`** — Routes only. Every file maps to a screen or layout. Files here must be thin.
- **`src/`** — Everything else. Components, features, services, hooks, state.

**Rule:** A file in `app/` imports and renders a component from `src/`. It contains no business logic.

---

## `app/` — The Routing Tree

```
app/
├── _layout.tsx              Root layout (wraps entire app)
├── index.tsx                / — Redirects to login or tasks
├── (auth)/                  Unauthenticated group
│   ├── _layout.tsx
│   ├── login.tsx            /login
│   ├── signup.tsx           /signup
│   └── forgot-password.tsx  /forgot-password
└── (app)/                   Authenticated group
    ├── _layout.tsx
    ├── (tabs)/
    │   ├── _layout.tsx      Bottom tab navigator
    │   ├── index.tsx        / (Tasks)
    │   ├── projects.tsx     /projects
    │   ├── notifications.tsx
    │   └── profile.tsx
    └── task/
        ├── [id].tsx         /task/:id
        └── new.tsx          /task/new (modal)
```

### Conventions

- `_layout.tsx` — Wraps all routes below it in a navigator.
- `(group)` — Route group (organizational, no URL impact).
- `[param]` — Dynamic route parameter.
- `index.tsx` — Default route for a folder.

### Route Files Must Be Thin

Every file in `app/` should look like this:

```tsx
import { TasksListScreen } from '@/features/tasks';
export default TasksListScreen;
```

All logic lives in `src/features/`. This keeps routing swappable and screens testable.

---

## `src/` — Feature-Based with Shared Layers

### `components/`

Shared UI components used across features.

- **`ui/`** — Design system primitives (Button, Input, Card). Generic.
- **`common/`** — App-specific shared components (EmptyState, NetworkBanner).
- **`layouts/`** — Page-level wrappers (Screen, ModalLayout).

> ❌ Feature-specific components go in `features/<feature>/components/`.

---

### `features/`

Each subfolder is a self-contained feature module:

```
features/tasks/
├── components/   — Components used only in this feature
├── hooks/        — Feature hooks (useTasksQuery, useCreateTask)
├── screens/      — Screen implementations (mounted by app/ route files)
├── services/     — Feature API (tasks-api.ts)
├── store/        — (optional) feature state
├── types.ts      — Feature types
└── index.ts      — Public exports
```

> ✅ Deleting a feature folder + its route files cleanly removes the feature.

---

### `hooks/`

Shared hooks used across multiple features.

> ❌ Feature-specific hooks → `features/<feature>/hooks/`.

---

### `services/`

Infrastructure code.

- **`api/`** — Axios client, interceptors, error classes.
- **`storage/`** — MMKV and SecureStore wrappers.
- **`auth/`** — Firebase auth plumbing (not UI — that's in `features/auth/`).

---

### `store/`

Global Zustand stores (auth, theme, UI).

> ❌ Feature-specific state → `features/<feature>/store/`.

---

### `lib/`

Pure utility functions. No React, no side effects. Unit-testable in isolation.

---

### `types/`

TypeScript types used across 3+ places.

> ❌ Feature-specific types → `features/<feature>/types.ts`.

---

### `constants/`

Theme tokens, route names, enums.

---

## Import Rules

1. **Use path aliases, never relative paths across folders.**
   - ✅ `import { Button } from '@/components/ui'`
   - ❌ `import { Button } from '../../../components/ui/Button'`

2. **Prefer barrel imports.**
   - ✅ `import { Button, Input } from '@/components/ui'`

3. **Features don't import from other features directly.**
   - Shared code must be promoted to a shared folder first.

4. **`app/` imports from `src/features/`, not the other way around.**
   - Dependency direction: `app/ → src/features/ → src/services/ → src/lib/`.

5. **Services and lib do not import from features or components.**

---

## Decision Tree — Where Does New Code Go?

```
Is it a route / screen mount?
  └─ app/<route>.tsx  (thin file, just re-exports)

Is it a screen implementation?
  └─ src/features/<feature>/screens/

Is it a pure function (no React)?
  └─ src/lib/

Is it a component?
  ├─ Used in only one feature? → features/<feature>/components/
  ├─ Generic primitive? → src/components/ui/
  ├─ App-specific, multi-feature? → src/components/common/
  └─ Screen wrapper? → src/components/layouts/

Is it a hook?
  ├─ One feature? → features/<feature>/hooks/
  └─ Shared? → src/hooks/

Is it API / storage / auth plumbing?
  └─ src/services/<subfolder>/

Is it global state? → src/store/
Feature state? → features/<feature>/store/

Is it a type?
  ├─ 3+ places? → src/types/
  └─ Feature-only? → features/<feature>/types.ts

Is it a constant? → src/constants/
```
