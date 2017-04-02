## Babel preset for lj-team projects

```bash
npm install -SE babel-core lj-team/babel-preset
```

```json
{
  "preset": [
    "lj-team"
  ]
}

// or

{
  "preset": [
    [
      "lj-team",
      {
        "modules": false,
        "alias": {
          "common": "./common"
        }
      }
    ]
  ]
}
```
