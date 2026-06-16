import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BeforeAfter from '@/components/BeforeAfter';

const IMG = {
  hero: 'https://cdn.poehali.dev/projects/a6b6548c-f8c6-4f50-8c97-bb3d302d5d54/files/bd302bb6-6e7e-43b7-900f-ebd360c6b000.jpg',
  before: 'https://cdn.poehali.dev/projects/a6b6548c-f8c6-4f50-8c97-bb3d302d5d54/files/39bfe57d-8064-4d91-963b-f74bd9bb7656.jpg',
  after: 'https://cdn.poehali.dev/projects/a6b6548c-f8c6-4f50-8c97-bb3d302d5d54/files/cfc32999-0295-47b3-8d89-47ce14b367be.jpg',
};

const nav = ['Главная', 'О компании', 'Услуги', 'Портфолио', 'Галерея', 'Прайс', 'Отзывы', 'Контакты', 'Блог'];

const services = [
  { icon: 'Sofa', title: 'Перетяжка мебели', desc: 'Замена обивки диванов, кресел и стульев премиальными тканями.' },
  { icon: 'Hammer', title: 'Реставрация', desc: 'Восстановление каркаса, механизмов и наполнителя до идеала.' },
  { icon: 'Palette', title: 'Дизайн на заказ', desc: 'Индивидуальный подбор материалов под ваш интерьер.' },
  { icon: 'Truck', title: 'Выезд и доставка', desc: 'Бесплатный замер, вывоз и возврат мебели по городу.' },
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
  { name: 'Елена В.', text: 'Старое бабушкино кресло превратили в произведение искусства. Качество бархата восхитительное!', role: 'Дизайнер интерьера' },
  { name: 'Михаил Д.', text: 'Перетянули угловой диван за 3 дня. Работа ювелирная, швы идеальные. Рекомендую.', role: 'Москва' },
  { name: 'Анна К.', text: 'Подобрали ткань точно под мой интерьер. Сервис на уровне люксового ателье.', role: 'Санкт-Петербург' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground bg-grain">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-20 px-6">
          <a href="#" className="font-display text-2xl tracking-[0.3em] text-gradient-gold">ATELIER</a>
          <nav className="hidden lg:flex gap-7 text-sm text-muted-foreground">
            {nav.map((n) => (
              <a key={n} href="#" className="hover:text-gold transition-colors duration-300">{n}</a>
            ))}
          </nav>
          <Button className="hidden lg:inline-flex bg-gold text-primary-foreground hover:bg-gold-soft rounded-none tracking-wider">
            Заказать звонок
          </Button>
          <button className="lg:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden flex flex-col gap-3 px-6 pb-6 bg-background/95 border-b border-border">
            {nav.map((n) => (
              <a key={n} href="#" className="text-muted-foreground hover:text-gold py-1">{n}</a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <img src={IMG.hero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-gold tracking-[0.4em] uppercase text-xs mb-6">Премиальное ателье мебели</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">
              Возвращаем мебели <span className="text-gradient-gold italic">роскошь</span> и характер
            </h1>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg">
              Перетяжка, реставрация и индивидуальный дизайн мебели премиум-класса. Ручная работа, благородные материалы, безупречный результат.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gold text-primary-foreground hover:bg-gold-soft rounded-none tracking-wider px-8">
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-gold/40 text-foreground hover:bg-gold/10 rounded-none tracking-wider px-8">
                Наши работы
              </Button>
            </div>
            <div className="flex gap-10 mt-14">
              {[['12', 'лет опыта'], ['3 500+', 'проектов'], ['5.0', 'рейтинг']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-gold">{n}</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Что мы делаем</p>
            <h2 className="font-display text-4xl md:text-5xl">Наши услуги</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border border-border p-8 hover:border-gold/50 transition-colors duration-500 group">
                <div className="w-14 h-14 flex items-center justify-center border border-gold/40 rounded-full mb-6 group-hover:bg-gold/10 transition-colors">
                  <Icon name={s.icon} size={24} className="text-gold" />
                </div>
                <h3 className="text-xl mb-3 font-display">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Gallery */}
      <section className="py-28 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Портфолио</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">До и после</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Перетащите ползунок, чтобы увидеть преображение мебели нашими мастерами</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <BeforeAfter before={IMG.before} after={IMG.after} label="Кресло «Винтаж»" />
            <BeforeAfter before={IMG.before} after={IMG.hero} label="Диван «Изумруд»" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Стоимость</p>
            <h2 className="font-display text-4xl md:text-5xl">Прайс-лист</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {prices.map((p) => (
              <div key={p.name} className="flex items-baseline justify-between py-5 border-b border-border group">
                <span className="text-lg group-hover:text-gold transition-colors">{p.name}</span>
                <span className="flex-1 mx-4 border-b border-dotted border-border/60 translate-y-[-4px]" />
                <span className="font-display text-xl text-gold whitespace-nowrap">{p.price}</span>
              </div>
            ))}
            <p className="text-muted-foreground text-sm mt-6 text-center">Точная цена — после бесплатного замера. Ткани оплачиваются отдельно.</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-28 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Отзывы</p>
            <h2 className="font-display text-4xl md:text-5xl">Говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="border border-border p-8 hover:border-gold/50 transition-colors">
                <div className="flex gap-1 mb-5 text-gold">
                  {[...Array(5)].map((_, i) => <Icon key={i} name="Star" size={16} className="fill-gold" />)}
                </div>
                <p className="text-foreground/90 italic font-display text-lg leading-relaxed mb-6">«{r.text}»</p>
                <div className="text-gold">{r.name}</div>
                <div className="text-muted-foreground text-sm">{r.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contacts */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="border border-gold/30 p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-50" />
            <div className="relative">
              <p className="text-gold tracking-[0.4em] uppercase text-xs mb-4">Свяжитесь с нами</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Подарите мебели вторую жизнь</h2>
              <p className="text-muted-foreground mb-10 max-w-lg mx-auto">Оставьте заявку — мастер приедет на бесплатный замер и рассчитает стоимость в день обращения.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-gold text-primary-foreground hover:bg-gold-soft rounded-none tracking-wider px-10">
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" className="border-gold/40 hover:bg-gold/10 rounded-none tracking-wider px-10">
                  <Icon name="Phone" size={18} className="mr-2" /> +7 (495) 000-00-00
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl tracking-[0.3em] text-gradient-gold">ATELIER</div>
          <div className="flex gap-6 text-muted-foreground">
            {['Send', 'Instagram', 'Facebook', 'Mail'].map((s) => (
              <a key={s} href="#" className="hover:text-gold transition-colors"><Icon name={s} size={18} fallback="Send" /></a>
            ))}
          </div>
          <p className="text-muted-foreground text-xs">© 2026 ATELIER. Премиальная перетяжка мебели.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
