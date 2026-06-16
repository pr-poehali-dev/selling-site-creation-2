import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BeforeAfter from '@/components/BeforeAfter';

const IMG = {
  hero: 'https://cdn.poehali.dev/projects/a6b6548c-f8c6-4f50-8c97-bb3d302d5d54/files/bd302bb6-6e7e-43b7-900f-ebd360c6b000.jpg',
  before: 'https://cdn.poehali.dev/projects/a6b6548c-f8c6-4f50-8c97-bb3d302d5d54/files/39bfe57d-8064-4d91-963b-f74bd9bb7656.jpg',
  after: 'https://cdn.poehali.dev/projects/a6b6548c-f8c6-4f50-8c97-bb3d302d5d54/files/cfc32999-0295-47b3-8d89-47ce14b367be.jpg',
};

const navLinks = ['Услуги', 'Портфолио', 'Прайс', 'Отзывы', 'Контакты'];

const services = [
  { icon: 'Sofa', title: 'Перетяжка мебели', desc: 'Диваны, кресла, стулья — любые виды мягкой мебели с премиальными тканями.' },
  { icon: 'Hammer', title: 'Реставрация', desc: 'Восстановление каркаса, пружин и наполнителя до заводского состояния.' },
  { icon: 'Palette', title: 'Дизайн на заказ', desc: 'Индивидуальный подбор ткани и фурнитуры под ваш интерьер.' },
  { icon: 'Truck', title: 'Выезд и доставка', desc: 'Бесплатный замер и доставка по городу.' },
];

const benefits = [
  { icon: 'BadgePercent', title: 'Экономия до 70%', desc: 'Дешевле новой мебели того же класса.' },
  { icon: 'FileSignature', title: 'Цена в договоре', desc: 'Фиксируем стоимость — никаких доплат.' },
  { icon: 'ShieldCheck', title: 'Гарантия 3 года', desc: 'На все виды работ. Устраняем бесплатно.' },
  { icon: 'Clock', title: 'Срок от 2 дней', desc: 'Быстро, аккуратно, без задержек.' },
];

const steps = [
  { n: '01', title: 'Заявка и замер', desc: 'Оставляете заявку — мастер приезжает бесплатно.' },
  { n: '02', title: 'Выбор ткани', desc: 'Подбираем материал и фиксируем цену в договоре.' },
  { n: '03', title: 'Перетяжка', desc: 'Реставрируем каркас, обиваем премиальной тканью.' },
  { n: '04', title: 'Доставка', desc: 'Возвращаем мебель как новую — с гарантией.' },
];

const prices = [
  { name: 'Стул / банкетка', price: 'от 2 500 ₽' },
  { name: 'Кресло', price: 'от 7 900 ₽' },
  { name: 'Диван прямой', price: 'от 18 000 ₽' },
  { name: 'Угловой диван', price: 'от 27 000 ₽' },
  { name: 'Изголовье кровати', price: 'от 9 500 ₽' },
  { name: 'Реставрация каркаса', price: 'от 4 000 ₽' },
];

const reviews = [
  { name: 'Елена В.', text: 'Кресло превратили в произведение искусства. Качество бархата восхитительное!', role: 'Дизайнер интерьера' },
  { name: 'Михаил Д.', text: 'Перетянули угловой диван за 3 дня. Работа ювелирная, швы идеальные.', role: 'Москва' },
  { name: 'Анна К.', text: 'Подобрали ткань точно под интерьер. Сервис на высшем уровне.', role: 'Санкт-Петербург' },
];

const faq = [
  { q: 'Сколько стоит перетяжка дивана?', a: 'От 18 000 ₽ за прямой диван. Точную цену назовём после бесплатного замера и зафиксируем в договоре.' },
  { q: 'Как быстро вы выполняете работу?', a: 'В среднем 2–4 дня в зависимости от сложности. Срочные заказы делаем за 1 день.' },
  { q: 'Есть ли гарантия на работу?', a: 'Да — 3 года на все виды работ. Любые недочёты устраняем бесплатно.' },
  { q: 'Можно ли перетянуть мебель на дому?', a: 'Несложные работы выполняем у вас. Крупные заказы забираем на производство бесплатно.' },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-base font-black tracking-[0.15em] uppercase">АТЕЛЬЕ МЕБЕЛИ</span>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((n) => (
              <a key={n} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{n}</a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+74950000000" className="text-sm font-semibold">+7 (495) 000-00-00</a>
            <Button className="bg-foreground text-background hover:bg-foreground/80 text-sm px-5">Заявка</Button>
          </div>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-3">
            {navLinks.map((n) => <a key={n} href="#" className="text-sm py-1">{n}</a>)}
            <Button className="bg-foreground text-background mt-2">Заявка</Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-3 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--accent))]">Скидка 20% до конца месяца</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              Перетяжка мебели<br />
              <span className="text-[hsl(var(--accent))]">за 2 дня.</span><br />
              Выгоднее, чем<br />покупать новую.
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
              Экономия до 70%, гарантия 3 года, фиксированная цена в договоре. Бесплатный выезд мастера.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {['Бесплатный замер', 'Цена в договоре', 'Гарантия 3 года'].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm font-medium">
                  <Icon name="Check" size={15} className="text-[hsl(var(--accent))]" />{b}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/80 font-semibold px-8">
                Узнать цену
              </Button>
              <Button size="lg" variant="outline" className="font-semibold px-8 border-border">
                Наши работы
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-5">Сегодня уже 12 заявок · Перезваниваем за 15 минут</p>
          </div>
          <div className="animate-fade-up-2 relative">
            <img src={IMG.hero} alt="Перетяжка мебели" className="w-full aspect-[4/3] object-cover" />
            <div className="absolute -bottom-4 -left-4 bg-white border border-border p-4 shadow-lg">
              <div className="text-2xl font-black">3 500+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium mt-0.5">выполненных работ</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[hsl(var(--accent))] text-white p-4 shadow-lg">
              <div className="text-2xl font-black">12</div>
              <div className="text-xs uppercase tracking-wider font-medium mt-0.5">лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[hsl(var(--accent))/10] flex items-center justify-center shrink-0">
                  <Icon name={b.icon} size={20} className="text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <div className="font-bold text-sm mb-1">{b.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-3">Что мы делаем</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Наши услуги</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((s) => (
              <div key={s.title} className="bg-background p-8 group hover:bg-card transition-colors">
                <Icon name={s.icon} size={28} className="text-[hsl(var(--accent))] mb-5" />
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section className="py-24 bg-card border-y border-border" id="portfolio">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-3">Портфолио</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">До и после</h2>
            <p className="text-muted-foreground mt-3 max-w-lg">Перетащите ползунок, чтобы увидеть разницу</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <BeforeAfter before={IMG.before} after={IMG.after} label="Кресло «Винтаж»" />
            <BeforeAfter before={IMG.before} after={IMG.hero} label="Диван «Изумруд»" />
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-3">Как мы работаем</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">4 простых шага</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="text-7xl font-black text-border leading-none mb-4">{s.n}</div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4 z-10" />
                )}
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase opacity-60 mb-3">Акция месяца</p>
              <h3 className="text-2xl md:text-3xl font-black mb-2">2 дивана и более — скидка 20%</h3>
              <p className="opacity-70 text-sm">Плюс бесплатная подушка-валик к каждому заказу.</p>
            </div>
            <Button size="lg" className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--gold-soft))] text-white font-bold px-10 shrink-0">
              Забрать скидку
            </Button>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24" id="price">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-3">Стоимость</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Прайс-лист</h2>
          </div>
          <div className="max-w-2xl">
            {prices.map((p) => (
              <div key={p.name} className="flex items-baseline justify-between py-5 border-b border-border group">
                <span className="font-medium group-hover:text-[hsl(var(--accent))] transition-colors">{p.name}</span>
                <span className="flex-1 mx-4 border-b border-dashed border-border translate-y-[-3px]" />
                <span className="font-black text-lg">{p.price}</span>
              </div>
            ))}
            <p className="text-muted-foreground text-sm mt-6">Точная цена — после бесплатного замера. Ткань оплачивается отдельно.</p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-card border-y border-border" id="reviews">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-3">Отзывы</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-background border border-border p-8">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-[hsl(var(--accent))] fill-[hsl(var(--accent))]" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 text-sm">«{r.text}»</p>
                <div className="font-bold text-sm">{r.name}</div>
                <div className="text-muted-foreground text-xs mt-0.5">{r.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" id="faq">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-3">Вопросы и ответы</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Частые вопросы</h2>
          </div>
          <div className="max-w-3xl space-y-px bg-border">
            {faq.map((f, i) => (
              <button
                key={f.q}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left bg-background px-8 py-6 hover:bg-card transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-sm">{f.q}</span>
                  <Icon name={openFaq === i ? 'Minus' : 'Plus'} size={18} className="shrink-0 text-muted-foreground" />
                </div>
                {openFaq === i && (
                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed animate-fade-up">{f.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-y border-border" id="contacts">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="section-label mb-4">Свяжитесь с нами</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              Подарите мебели<br />вторую жизнь
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Оставьте заявку — мастер приедет на бесплатный замер и рассчитает стоимость в день обращения.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/80 font-bold px-10">
                Оставить заявку
              </Button>
              <Button size="lg" variant="outline" className="font-semibold px-8 gap-2">
                <Icon name="Phone" size={16} /> +7 (495) 000-00-00
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm font-black tracking-[0.15em] uppercase">АТЕЛЬЕ МЕБЕЛИ</span>
          <div className="flex gap-6">
            {navLinks.map((n) => (
              <a key={n} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{n}</a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Ателье мебели. Все права защищены.</p>
        </div>
      </footer>

    </div>
  );
}
