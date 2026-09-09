# `@sebastienrousseau/cpp-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/cpp-config`.

---

## Description
Shareable C++ configuration standards providing modern C++23 clang-format, clang-tidy, and cmake-format rules.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/cpp-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. .clang-format
- **Description**: Standardized C++23 formatting preset with 4 spaces, 100 column limit, and modern bracket wrapping.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. .clang-tidy
- **Description**: Hardened clang-tidy checks covering cppcoreguidelines, modernize, bugprone, and performance.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. cmake-format.py
- **Description**: Deterministic CMake script formatting for modern target-based build configurations.
- **Scope**: Production & Development
- **Status**: Stable & Active
