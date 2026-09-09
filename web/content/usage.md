---
title: "Usage — @sebastienrousseau/cpp-config"
description: "How to use and configure @sebastienrousseau/cpp-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/cpp-config` can be consumed across all standard module formats.

## CommonJS

```javascript
const config = require("@sebastienrousseau/cpp-config");
console.log(config.presets);
```

## ES Modules

```javascript
import config from "@sebastienrousseau/cpp-config";
console.log(config.defaultPreset);
```
