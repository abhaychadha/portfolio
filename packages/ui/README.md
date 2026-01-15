# @portfolio/ui

Shared UI component library for the Portfolio monorepo.

## Installation

This package is part of the monorepo and should be installed via workspace dependency:

```json
{
  "dependencies": {
    "@portfolio/ui": "workspace:*"
  }
}
```

## Usage

```tsx
import { Line, ProjectCard } from "@portfolio/ui";

// Use components
<Line />
<ProjectCard image="/path/to/image.png" tag="Tag" />
```

## Components

### Line
A horizontal divider line component.

### ProjectCard
A card component for displaying project images with optional tags.

## Development

This package uses TypeScript and exports components as ES modules. Components are imported directly from source during development (no build step required).
