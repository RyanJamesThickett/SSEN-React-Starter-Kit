# ⚡ React + Vite Starter Kit (SSEN NERDA)

A lightweight React starter template for exploring SSEN’s NERDA API data.
Includes sensible defaults, MUI charts, and TanStack Query, but you can easily strip everything back to plain fetch if you prefer.

---

## 🚀 Getting Started

### **1. Install dependencies**

Use **any** of the three supported runtimes:

#### **npm**
```bash
npm i
npm run dev
```

#### **pnpm**
```bash
pnpm i
pnpm dev
```

#### **bun**
```bash
bun i
bun run dev
```

Node **v24.5.0 or higher** is required.

---

## 🔑 Add Your NERDA API Token

1. Visit: **https://nerda.ssen.co.uk/nerda**
2. Create an account and log in
3. Generate a **short-term token**.
4. Open the project file:  
   **`vite.config.js`**
5. Replace the `<TOKEN>` placeholder entirely with your generated token.

Example:
```js
defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://nerda.ssen.co.uk/nerda/data',
        headers: {
          Authorization: 'Bearer <TOKEN>' // ← replace this
        }
      }
    }
  }
})
```

Save the file and restart the dev server if it’s already running.

---

## 👀 What You Should See

If your token is valid, loading the app in your browser will show a **screen full of live NERDA data**, ready to explore or visualise.

---

## 📊 Included Tools

### **React + MUI Charts**
Great for quickly creating line charts, bar charts, area charts, or dashboards.

### **TanStack Query**
Makes API requests and caching very easy.  
If you’d rather keep things ultra-minimal, you can replace these with a normal `fetch` call.

---

## 🛠 Tech Stack

- **React**
- **Vite**
- **MUI + MUI Charts**
- **TanStack Query**
- **Node 24.5.0+**

---