# Dra. Monica Lee — Dermatologia

Site institucional profissional (HTML5, CSS3 e JavaScript puro — sem frameworks).
Visual moderno, minimalista e premium, voltado para dermatologia e estética médica.

**Domínio:** www.dramonicalee.com.br
**GitHub:** draml1

---

## Estrutura do projeto

```
/
├── index.html          → página principal
├── style.css           → estilos
├── script.js           → interações (scroll, navbar, animações)
├── favicon.ico         → ícone do site
├── CNAME               → domínio personalizado (GitHub Pages)
├── robots.txt          → SEO
├── sitemap.xml         → SEO
├── README.md           → este arquivo
├── images/
│   ├── banner.jpg      → foto do Hero (topo)
│   ├── perfil.jpg      → foto da seção "Sobre"
│   └── og-image.jpg    → imagem de compartilhamento (redes sociais)
└── assets/
    └── apple-touch-icon.png
```

> As imagens atuais são **placeholders**. Substitua-as pelas fotos profissionais reais (mesmos nomes de arquivo).

---

## 1. Como publicar no GitHub Pages

1. Crie um repositório na conta **draml1** (ex.: `dramonicalee`).
2. Envie todos os arquivos deste projeto para a raiz do repositório:
   ```bash
   git init
   git add .
   git commit -m "Site Dra. Monica Lee"
   git branch -M main
   git remote add origin https://github.com/draml1/dramonicalee.git
   git push -u origin main
   ```
3. No GitHub, acesse **Settings → Pages**.
4. Em **Source**, escolha a branch `main` e a pasta `/ (root)`. Salve.
5. Aguarde alguns minutos. O site ficará disponível em:
   `https://draml1.github.io/dramonicalee/`

---

## 2. Como conectar o domínio personalizado (www.dramonicalee.com.br)

O arquivo **CNAME** já está incluído com `www.dramonicalee.com.br`.

### No GitHub
1. **Settings → Pages → Custom domain**: digite `www.dramonicalee.com.br` e salve.
2. Marque **Enforce HTTPS** (após o certificado ser emitido — pode levar até 24h).

### No provedor do domínio (Livance / registrador do .com.br)
Como o domínio é gerenciado pela Livance, você precisa **apontar o DNS** para o GitHub.
Solicite ao suporte da Livance (ou no painel de DNS) a criação dos registros:

**Registro CNAME (para o www):**
```
Tipo: CNAME
Nome/Host: www
Valor/Destino: draml1.github.io
```

**Registros A (para o domínio raiz, opcional — redireciona dramonicalee.com.br → www):**
```
Tipo: A   Nome: @   Valor: 185.199.108.153
Tipo: A   Nome: @   Valor: 185.199.109.153
Tipo: A   Nome: @   Valor: 185.199.110.153
Tipo: A   Nome: @   Valor: 185.199.111.153
```

> **Importante:** se a Livance hospeda o site atual, apontar o DNS para o GitHub fará o domínio exibir este novo site. Confirme com a Livance se o domínio pode ter o DNS alterado sem afetar outros serviços (e-mail, agendamento etc.). Se você usa e-mail no mesmo domínio, **não altere** registros MX.

A propagação de DNS pode levar de alguns minutos a 24 horas.

---

## 3. Como alterar as imagens

Substitua os arquivos na pasta `images/`, **mantendo os mesmos nomes**:

- `images/banner.jpg` → foto principal do topo (recomendado: 1600×1000px, horizontal).
- `images/perfil.jpg` → foto da seção "Sobre" (recomendado: 800×1000px, vertical/retrato).
- `images/og-image.jpg` → imagem que aparece ao compartilhar o link (1200×630px).

Não é preciso mexer no código se os nomes forem mantidos.
Para trocar o **favicon**, substitua `favicon.ico`.

---

## 4. Como alterar os textos

Abra o **index.html** e edite o conteúdo entre as tags.

- **Título/subtítulo do topo:** procure por `hero-title` e `hero-text`.
- **Texto "Sobre":** procure pelo comentário `<!-- ESPAÇO RESERVADO -->` na seção `id="sobre"` e substitua os parágrafos.
- **Contato (WhatsApp / e-mail):** procure por `wa.me/5511922292747` e `dramonicalee1@gmail.com` e altere onde aparecerem (topo, seção contato, rodapé e botão flutuante).

> O número do WhatsApp segue o formato internacional sem símbolos: `55` (Brasil) + `11` (DDD) + número. Ex.: `5511922292747`.

---

## 5. Como adicionar novos tratamentos

Na seção `id="tratamentos"` do **index.html**, copie um bloco `<article class="card reveal">...</article>` e cole em seguida, alterando:

```html
<article class="card reveal">
    <div class="card-icon">
        <!-- cole aqui um ícone SVG -->
    </div>
    <h3 class="card-title">Nome do novo tratamento</h3>
    <p class="card-text">Descrição curta do tratamento.</p>
</article>
```

O layout se ajusta automaticamente. Para ícones, você pode usar SVGs de bibliotecas gratuitas como [Lucide](https://lucide.dev) ou [Feather Icons](https://feathericons.com) (basta colar o código `<svg>`).

---

## 6. Como colocar as postagens do Instagram (seção "Eu mesma")

A seção **"Eu mesma"** (`id="eumesma"`) mostra **3 fotos** que levam ao seu perfil
**@dramonicalee1**. As fotos ficam na pasta `images/` com os nomes `insta1.jpg`,
`insta2.jpg` e `insta3.jpg` (atualmente são placeholders).

### Para colocar suas postagens reais

1. Escolha 3 postagens do seu Instagram.
2. Salve cada imagem em formato **quadrado** (recomendado: 1080x1080px).
3. Substitua os arquivos em `images/`, mantendo os mesmos nomes:
   - `images/insta1.jpg`
   - `images/insta2.jpg`
   - `images/insta3.jpg`

Pronto — não é preciso mexer no código. As novas fotos aparecerão automaticamente.

### (Opcional) Fazer cada foto abrir a postagem certa

Por padrão, clicar em qualquer foto leva ao seu perfil. Se quiser que cada uma abra a
postagem específica, no **index.html**, dentro do bloco `<!-- FEED DO INSTAGRAM -->`,
troque o endereço de cada link:

```html
<a class="ig-post" href="https://instagram.com/p/CODIGO-DA-POSTAGEM/" ...>
```

O código da postagem aparece no endereço dela quando você a abre no Instagram
(ex.: `instagram.com/p/Cxyz123/`).

> **Observação:** neste método as fotos são fixas — quando você postar algo novo no
> Instagram, precisa trocar as imagens manualmente para o site refletir a novidade.

## 7. Como ativar o Google Analytics

No `index.html`, dentro do `<head>`, existe um bloco comentado do Google Analytics.
Remova os comentários `<!-- -->` e troque `G-XXXXXXXXXX` pelo seu ID de medição (Google Analytics 4).

---

## 8. Como atualizar o site futuramente

Após qualquer alteração local:

```bash
git add .
git commit -m "Descreva a alteração"
git push
```

O GitHub Pages atualiza automaticamente em 1–2 minutos.

---

## Redes sociais no rodapé

No rodapé, os links de redes sociais estão com `href="#"`. Substitua pelos endereços reais
(ex.: `https://instagram.com/seu_perfil`).

---

## Tecnologias

- HTML5 semântico
- CSS3 moderno (Grid, Flexbox, variáveis, animações)
- JavaScript puro (Intersection Observer para animações de entrada)
- Fontes: Cormorant Garamond + Jost (Google Fonts)
- Sem frameworks, sem Bootstrap, sem WordPress

---

© Dra. Monica Lee — Dermatologia. São Paulo.
