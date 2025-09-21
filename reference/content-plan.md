# MV-Si002 Content Outline

## Sections & Target Components

1. Header / Navigation
   - Update to anchors: concept, features, ingredients, effects, testimonials, lineup, faq, purchase
   - Replace whitepaper CTA with purchase button + contact mailto
   - Keep language toggle for now (JP default) but focus on JP messaging

2. Hero (`src/components/Hero.tsx`)
   - Replace copy with:
     - Badge: 限定販売中
     - Title: LUXURY FACE POWDER
     - Main slogan lines matching reference (朝の5秒で、24時間の自信を etc.)
     - Supporting paragraph about ceramic skin
     - CTA Buttons: 購入する, 詳細を見る (anchor to lineup & concept)
     - Feature badges: 朝5秒で完成, 24時間キープ, 医薬部外品
     - Background to stay with existing earth image for now to maintain repo aesthetic

3. Concept Section (`src/components/ProjectOverview.tsx` → repurpose as Concept)
   - Remove legacy content
   - Insert CONCEPT heading with copy describing Mother Vegetables Confidence (rewritten JP + short EN tagline)
   - Add two paragraphs referencing 35億年前 etc.
   - Include supporting image from reference `doc1.jpg`

4. Features Section (`src/components/IndustryApproach.tsx` → repurpose)
   - Swap 8-industry grid for 3 feature cards: 朝の5秒で完成, 24時間崩れない, 肌に優しい
   - Each card includes subtitle and short description
   - Use icons (e.g., react-icons) for visual support

5. Ingredients & Effects (`src/components/Ingredients.tsx`)
   - Dedicated component presenting 主成分 and 効果一覧 using two-column layout with doc images (`doc1-a.jpg`, `doc2.jpg`, etc.)
   - Bullet list for benefits (化粧崩れ防止 etc.)

6. Education / Effect Stories
   - Build new component `EffectsExplainer.tsx` that covers:
     - 「顔のテカリを消す」 section with before/after description + supporting image `doc2-b.jpg` etc.
     - 「睡眠前のすっぴんも」 section with similar structure and CTA text

7. Testimonials (`src/components/Testimonials.tsx`)
   - Show three testimonials with before/after images (`before1.jpg`, `after1.jpg`, etc.)
   - Include age/duration + testimonial text

8. Usage Scenarios (`src/components/UsageScenarios.tsx`)
   - Showcase 3 everyday situations (メイク仕上げ, 就寝前, エチケット) with matching icons (`usage-*.png`) and detailed copy.

9. Product Lineup (`src/components/ProductLineup.tsx`)
   - Expand to the 7-SKU catalogue (silica-only & エクトイン配合) using prices, descriptions, and outbound URLs from MV-Si001 assets (`mix1500.png` 等)。

10. Before/After Gallery (`src/components/BeforeAfterGallery.tsx`)
   - Provide tappable cards inspired by MV-Si001の「Before After」CTA to reveal the testimonial imagery already in assets.

11. Guarantee & CTA
   - Keep `GuaranteeCTA.tsx` copy but align bullets with MV-Si001 promises if needed.

12. FAQ (`src/components/FAQ.tsx`)
   - Keep the three core questions, adjust tone as required.

13. Footer (`src/components/Footer.tsx`)
   - Confirm dotpb株式会社表記と導線。

## Additional Notes
- Update `LanguageContext` default to JP to match primary language ✅
- Ensure new anchors/ids exist for smooth scroll from header and CTAs
- Remove unused assets and references left from previous project as follow-up
