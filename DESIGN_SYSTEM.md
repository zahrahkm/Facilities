# 🧩 Design System Guide

This guide outlines the typography, colors, and custom utility classes defined in your Tailwind CSS setup.

---

## 🎨 Color Tokens

| Name | Value |
|------|-------|
| `mainBackground` | `#FAFAFA` |
| `primaryDefault` | `#EC691A` |
| `secondary` | `#F5F5F5` |
| `secondaryHover` | `#E0E0E0` |
| `textDefault` | `#1E1E1E` |
| `textDefaultSecondary` | `#757575` |
| `borderDisabledDefault` | `#B3B3B3` |
| `borderDefault` | `#9CA3AF` |
| `positiveBackground` | `#EBFFEE` |
| `positiveText` | `#14AE5C` |
| `dangerBackground` | `#FEE9E7` |
| `dangerText` | `#EC221F` |
| `defaultIconBackground` | `#975102BF` |
| `navbarBackground` | `#2C2C2C` |
| `textNuetral` | `#767676` |

---

## ✍️ Typography Utilities

| Class | Description |
|-------|-------------|
| `.text-body-strong` | Inter, `font-semibold`, `text-base`, `leading-normal` |
| `.text-neutral` | Inter, `font-semibold`, `text-sm` |
| `.text-form-value` | Inter, `font-medium`, `text-xs`, `leading-4` |
| `.text-form-label` | Default font, `font-medium`, `text-xs`, `leading-4` |
| `.text-header` | Default font, `font-semibold`, `text-2xl`, `leading-normal` |
| `.text-nunito-header` | Nunito, `text-base`, `leading-[22px]`, `font-normal` |
| `.text-nunito-body` | Nunito, `text-base`, `leading-[22px]`, `font-normal` |
| `.text-nunito-bold` | Nunito, `text-base`, `leading-[22px]`, `font-bold` |
| `.text-body-base` | Default font, `text-base`, `leading-normal`, `font-normal` |
| `.text-body-small` | Default font, `text-sm`, `font-normal` |

---

## 🧰 Utility Classes

### 🟧 Headers
| Class | Description |
|-------|-------------|
| `.header-bar` | `bg-navbarBackground`, `text-white`, `h-14`, flex alignment |
| `.mobile-header-bar` | Mobile sidebar: `bg-navbarBackground`, `w-64`, `fixed`, `z-50`, spacing |

### 🔁 Global
| Class | Description |
|-------|-------------|
| `.btn-disabled` | Disabled button: `cursor-not-allowed`, `text-textDefaultSecondary` |
| `.overlay` | Centered overlay: `bg-black`, `bg-opacity-50`, `fixed`, `z-40` |
| `.card` | Rounded card with hover effect |

### 🧾 Form
| Class | Description |
|-------|-------------|
| `.input-base` | Input: `border`, `px-2.5`, `rounded-md`, `text-form-value` |
| `.checkbox` | Square checkbox with border and disabled state |
| `.textarea` | Multiline input, padded and border-styled |
| `.form-container` | Flexible max-width container |
| `.form-card` | Form section: white, rounded, padded, shadowed |

### 🔖 Badge
| Class | Description |
|-------|-------------|
| `.base-badge` | Badge with padding and `rounded-full` |
| `.succes` | Success badge: `bg-positiveBackground`, `text-positiveText` |
| `.error` | Error badge: `bg-dangerBackground`, `text-dangerText` |
| `.default-badge` | Circular icon badge: `bg-defaultIconBackground`, `w-8`, `h-8` |

### 💬 Dialog
| Class | Description |
|-------|-------------|
| `.dialog-container` | Fullscreen center overlay |
| `.dialog-card` | Dialog box with padding, shadow, and dimensions |

---

## 🔡 Fonts

| Token | Stack |
|-------|-------|
| `inter` | `Inter, sans-serif` |
| `nunito` | `Nunito, sans-serif` |

---

## 📐 Container Settings

| Property | Value |
|----------|-------|
| Centered | `true` |
| Padding | `1rem` |
| Screens |
| - `sm` | `600px` |
| - `md` | `728px` |
| - `lg` | `984px` |
| - `xl` | `1240px` |
| - `2xl` | `1240px` |

---

## ✅ Tips

- Use `.form-container` and `.form-card` together for responsive form layouts.
- Combine typography classes like `.text-nunito-body` with utility classes for spacing and color.
- Keep color naming semantic to avoid UI/UX confusion.

---

Let me know if you want this exported as a PDF or converted to HTML for a style guide page!
