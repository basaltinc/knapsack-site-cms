---
layout: docs
title: Design Tokens
order: 60
---

Design tokens are named entities for identifying, storing, and accessing the most basic layer of a design system. Design tokens include colors, spacing, typography, animation and other values that make up a design language. Assigning these core values to design tokens is an effective way to create a more scalable, maintainable, and intentional system.

Bedrock provides users the ability to organize, view and query design tokens. Bedrock uses [Theo](https://www.npmjs.com/package/theo), a library which allows users to define design tokens in an intuitive, agnostic manner and then retrieve those design tokens in the format of their choice. As your design system grows, design tokens allow for scalability.

## Design Token Categories

Design Token Categories is a method of organizing Design Tokens based on their intended use. For example, the Design Token Category `text-color` is a collection of all colors that are intended to be used for text. 

Bedrock supports the following Design Token Categories:

- `box-shadow`
- `inner-shadow`
- `text-shadow`
- `text-color`
- `background-color`
- `border-color`
- `border-style`
- `border-radius`
- `font-family`
- `font-size`
- `font-weight`
- `font-style`
- `line-height`
- `animation`
- `hr-color`
- `spacing`
- `media-query`

See [Theo Docs](https://github.com/salesforce-ux/theo) for more information on assigning design system categories. 

## Design Token Groups

Design Token Groups are unique to Bedrock and allow users to organize Design Token Categories into groups to best suit the needs of a given design system. For example, the group `Colors` may include `text-color`, `border-color`, and `background-color`. 

Any given Design Token Category can belong to multiple groups. For example `text-color` may be part of the `Colors` group as wells as a `Fonts` group.

## Example Design Token Files

`tokens.yml` - This is the entry file identified in `bedrock.config.js`.
```yaml
imports:
  - ./alias.yml
  - ./colors.yml
  - ./spacing.yml
```

`alias.yml`
```yaml
aliases:
  primary_brand_color:
    value: "#16394B"
  secondary_brand_color:
    value: "#E1C933"
```

`colors.yml`
```yaml
props:
  primary-background:
    value: '{!primary_brand_color}'
    category: background-color
  primary-text:
    value: '{!primary_brand_color}'
    category: text-color
  primary-border:
    value: '{!primary_brand_color}'
    category: border-color
  secondary-background:
    value: '{!secondary_brand_color}'
    category: background-color
  secondary-text:
    value: '{!secondary_brand_color}'
    category: text-color
  secondary-border:
    value: '{!secondary_brand_color}'
    category: border-color
  white-background:
    value: '#fff'
    category: background-color
  black-text:
    value: '#000'
    category: text-color
  black-border:
    value: '#000'
    category: border-color
imports:
  - ./aliases.yml
global:
  type: color
```

`spacing.yml`
```yaml
props:
  spacing-xs:
    value: .5rem
  spacing-s:
    value: .75rem
  spacing-m:
    value: 1rem
  spacing-l:
    value: 1.5rem
  spacing-xl:
    value: 2rem
  spacing-xxl:
    value: 3.3rem
global:
  type: spacing
  category: spacing
```
