# Mama Leone – Ristorante Pizzeria

Website për **Mama Leone** në Meldorf — gati për [www.mama-leone.de](https://www.mama-leone.de).

## Karakteristikat

- Faqe kryesore + `/menu` me porosi online (Warenkorb)
- Menu dixhitale me kërkim dhe filtrim allergenesh
- YouTube ambient në footer + buton zëri në menu
- SEO: sitemap, robots.txt, Open Graph, JSON-LD Restaurant
- Responsive për mobile dhe desktop

## Të dhënat e biznesit

- **Adresa:** Südermarkt 7 • 25704 Meldorf
- **Telefon:** 0 48 32 / 97 87 888
- **Website:** www.mama-leone.de
- **Orari:** 11:30–14:30 & 17:30–22:00 (të mbyllur të martën)

## Lokal

```bash
npm install
cp .env.example .env.local   # opsionale
npm run dev
```

Hap [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy në mama-leone.de (Vercel — rekomanduar)

### 1. Push në GitHub

Repo: [github.com/kresha325/mama-leone](https://github.com/kresha325/mama-leone)

### 2. Lidhe me Vercel

1. Shko te [vercel.com](https://vercel.com) → **Add New Project**
2. Import repo `kresha325/mama-leone`
3. Framework: **Next.js** (auto)
4. Shto Environment Variable:
   - `NEXT_PUBLIC_SITE_URL` = `https://www.mama-leone.de`
5. Kliko **Deploy**

### 3. Lidhe domenin

Në Vercel → Project → **Settings → Domains**:

| Domain | Veprim |
|--------|--------|
| `www.mama-leone.de` | Primary domain |
| `mama-leone.de` | Redirect → www (automatik nga `next.config.ts`) |

Te registrar-i i domain-it (ku e ke blerë `mama-leone.de`), shto DNS:

**Për www (CNAME):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Për root domain (A record):**
```
Type: A
Name: @
Value: 76.76.21.21
```

Ose përdor Vercel nameservers nëse i transferon DNS te Vercel.

### 4. Verifikimi

Pas propagimit DNS (5 min – 48 orë):

- [https://www.mama-leone.de](https://www.mama-leone.de)
- [https://www.mama-leone.de/menu](https://www.mama-leone.de/menu)
- [https://www.mama-leone.de/sitemap.xml](https://www.mama-leone.de/sitemap.xml)
- [https://www.mama-leone.de/robots.txt](https://www.mama-leone.de/robots.txt)

## Teknologjitë

- Next.js 15 · React 19 · TypeScript · Tailwind CSS
