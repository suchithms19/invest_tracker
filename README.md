# Investment Calculator (Angular 18)

Minimal Angular application that calculates and displays yearly investment growth based on user inputs (initial investment, annual contribution, expected return, duration).

## Tech Stack
- **Framework**: Angular 18 (standalone application)
- **Language**: TypeScript (strict mode)
- **Package manager**: pnpm

## Requirements
- Node.js 18+ (LTS recommended)
- pnpm 8+

## Getting Started
```bash
pnpm install
pnpm start
# Visit http://localhost:4200
```

## Project Structure
```
src/
  app/
    components/
      header/                # App header
      user/                  # User input form for investment parameters
      investment-results/    # Tabular results display
    investment.service.ts    # Core calculation logic
    app.component.*          # Root component
  public/                    # Static assets
```
