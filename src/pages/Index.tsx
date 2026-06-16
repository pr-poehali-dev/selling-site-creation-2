import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import BeforeAfter from '@/components/BeforeAfter';

/* ─── Медиа ─────────────────────────────────────────────────────── */
const IMG = {
  master:   'https://cdn.poehali.dev/projects/a6b6548c-f8c6-4f50-8c97-bb3d302d5d54/files/99df6230-a51a-4397-bd5e-51b89e7a983a.jpg',
  hero:     'https://cdn.poehali.dev/projects/a6b6548c-f8c6-4f50-8c97-bb3d302d5d54/files/a002abb7-69e0-4304-9eb5-382e0eef6f0e.jpg',
  result:   'https://cdn.poehali.dev/projects/a6b6548c-f8c6-4f50-8c97-bb3d302d5d54/files/8e155660-70c1-438f-b8f3-31c913f9be29.jpg',
  fabrics:  'https://cdn.poehali.dev/projects/a6b6548c-f8c6-4f50-8c97-bb3d302d5d54/files/4d4102a5-a98e-4fa9-984b-f3e664a1926e.jpg',
  before:   'https://cdn.poehali.dev/projects/a6b6548c-f8c6-4f50-8c97-bb3d302d5d54/files/39bfe57d-8064-4d91-963b-f74bd9bb7656.jpg',
  after:    'https://cdn.poehali.dev/projects/a6b6548c-f8c6-4f50-8c97-bb3d302d5d54/files/cfc32999-0295-47b3-8d89-47ce14b367be.jpg',
  ba2:      'https://cdn.poehali.dev/projects/a6b6548c-f8c6-4f50-8c97-bb3d302d5d54/files/17f37583-43cb-4d4f-9124-7513c9b99ee5.jpg',
};

/* ─── Данные ─────────────────────────────────────────────────────── */
const NAV = ['Услуги', 'Портфолио', 'Прайс', 'Отзывы', 'Контакты'];

const STATS = [
  { val: '3 500+', label: 'работ выполнено' },
  { val: '12',     label: 'лет в Москве' },
  { val: '98%',    label: 'клиентов довольны' },
  { val: '3 года', label: 'гарантия' },
];

const TRUST = [
  { icon: 'ShieldCheck',    text: 'Гарантия 3 года' },
  { icon: 'FileText',       text: 'Договор на каждый заказ' },
  { icon: 'Truck',          text: 'Бесплатный выезд и доставка' },
  { icon: 'Clock',          text: 'Срок от 2 рабочих дней' },
  { icon: 'BadgePercent',   text: 'Экономия до 70% vs новая мебель' },
  { icon: 'Headphones',     text: 'Перезваниваем за 15 минут' },
];

const SERVICES = [
  {
    icon: 'Sofa',
    title: 'Перетяжка диванов',
    desc: 'Прямые, угловые, модульные. Любые размеры и конфигурации.',
    price: 'от 18 000 ₽',
    tag: 'Популярно',
  },
  {
    icon: 'ArmchairIcon',
    title: 'Перетяжка кресел',
    desc: 'Кресла, пуфики, банкетки — полное обновление обивки.',
    price: 'от 7 900 ₽',
    tag: '',
  },
  {
    icon: 'Hammer',
    title: 'Реставрация каркаса',
    desc: 'Ремонт сломанных пружин, перетяжка ремнями, замена поролона.',
    price: 'от 4 000 ₽',
    tag: '',
  },
  {
    icon: 'BedDouble',
    title: 'Изголовья кроватей',
    desc: 'Перетяжка мягких изголовий любой формы и размера.',
    price: 'от 9 500 ₽',
    tag: '',
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Стулья и барные стулья',
    desc: 'Комплект кухонных и обеденных стульев — скидка 15%.',
    price: 'от 2 500 ₽',
    tag: 'Скидка на комплект',
  },
  {
    icon: 'Palette',
    title: 'Дизайн-проект обивки',
    desc: 'Подбор ткани с дизайнером, 3D-визуализация до начала работ.',
    price: 'Бесплатно',
    tag: '',
  },
];

const STEPS = [
  { n: '01', icon: 'Phone',         title: 'Заявка',          desc: 'Оставляете заявку онлайн или по телефону — перезваниваем за 15 минут.' },
  { n: '02', icon: 'Ruler',         title: 'Бесплатный замер', desc: 'Мастер приезжает, осматривает мебель, рассчитывает стоимость на месте.' },
  { n: '03', icon: 'Palette',       title: 'Выбор ткани',     desc: '500+ вариантов тканей: велюр, рогожка, экокожа, кожа, жаккард.' },
  { n: '04', icon: 'FileSignature', title: 'Договор',         desc: 'Фиксируем цену и сроки — никаких доплат и сюрпризов.' },
  { n: '05', icon: 'Wrench',        title: 'Выполнение работ', desc: 'Забираем мебель или работаем у вас. Срок 2–5 рабочих дней.' },
  { n: '06', icon: 'Star',          title: 'Результат',       desc: 'Доставляем мебель, показываем результат. Вы платите только после приёмки.' },
];

const PRICES = [
  { name: 'Стул / банкетка',         from: '2 500',  popular: false },
  { name: 'Кресло',                   from: '7 900',  popular: false },
  { name: 'Диван прямой 2-местный',   from: '18 000', popular: true },
  { name: 'Диван прямой 3-местный',   from: '24 000', popular: false },
  { name: 'Угловой диван',            from: '27 000', popular: false },
  { name: 'Модульный диван',          from: '35 000', popular: false },
  { name: 'Изголовье кровати',        from: '9 500',  popular: false },
  { name: 'Замена поролона',          from: '3 500',  popular: false },
  { name: 'Реставрация каркаса',      from: '4 000',  popular: false },
];

const FABRICS = [
  { name: 'Велюр',      colors: 18, icon: '🧵', note: 'Премиум' },
  { name: 'Рогожка',    colors: 24, icon: '🟤', note: 'Хит продаж' },
  { name: 'Экокожа',    colors: 15, icon: '⬛', note: 'Практично' },
  { name: 'Жаккард',    colors: 12, icon: '🌿', note: 'Классика' },
  { name: 'Микрофибра', colors: 20, icon: '🔵', note: 'Для семьи' },
  { name: 'Натуральная кожа', colors: 8, icon: '🟫', note: 'Люкс' },
];

const REVIEWS = [
  {
    name: 'Ольга Смирнова',
    city: 'Москва, Хамовники',
    stars: 5,
    date: '15 мая 2025',
    text: 'Обратилась с угловым диваном — старый велюр износился до дыр. Ребята привезли каталог, помогли выбрать рогожку цвета мокко. Сделали за 4 дня. Диван как новый, даже лучше! Швы идеальные, форма сохранена. Рекомендую всем!',
    order: 'Угловой диван, рогожка',
  },
  {
    name: 'Дмитрий Козлов',
    city: 'Москва, Митино',
    stars: 5,
    date: '2 апреля 2025',
    text: 'Перетянули 8 кухонных стульев и 2 барных стула. Цена оказалась ниже, чем я думал. Мастер приехал вовремя, замерил всё быстро. Через 3 дня привезли готовые стулья — не узнал! Очень доволен соотношением цена/качество.',
    order: '8 стульев + 2 барных',
  },
  {
    name: 'Марина Петрова',
    city: 'Москва, Сокол',
    stars: 5,
    date: '18 марта 2025',
    text: 'Перетянула кресло-реклайнер в натуральную кожу. Думала будет дорого — оказалось разумно. Кресло прослужит ещё лет 20. Отдельное спасибо мастеру Александру за советы по уходу за кожей. Обязательно вернусь с диваном!',
    order: 'Кресло-реклайнер, натуральная кожа',
  },
  {
    name: 'Сергей Иванов',
    city: 'Москва, Южный порт',
    stars: 5,
    date: '7 февраля 2025',
    text: 'Реставрировали старинное кресло 1950-х годов. Очень переживал — думал испортят. Но ребята отнеслись трепетно, восстановили каркас, перетянули в исторический гобелен. Кресло стало центром гостиной. Мастера — настоящие профессионалы!',
    order: 'Антикварное кресло, гобелен',
  },
];

const FAQ = [
  {
    q: 'Сколько стоит перетяжка дивана в Москве?',
    a: 'Стоимость перетяжки прямого дивана — от 18 000 ₽, угловой — от 27 000 ₽. Цена зависит от размера, конфигурации и выбранной ткани. Точную стоимость рассчитываем на бесплатном выезде мастера — называем сумму до начала работ и фиксируем в договоре.',
  },
  {
    q: 'Как быстро выполняете заказ?',
    a: 'Стандартный срок — 2–5 рабочих дней. Срочный заказ (стул, кресло) можем выполнить за 1 день. Точные сроки обсуждаем при замере и также фиксируем в договоре.',
  },
  {
    q: 'Есть ли гарантия на перетяжку мебели?',
    a: 'Даём гарантию 3 года на все виды работ. Если в течение гарантийного срока появятся дефекты по нашей вине — устраним бесплатно в течение 3 рабочих дней.',
  },
  {
    q: 'Нужно ли везти мебель к вам?',
    a: 'Нет — выезжаем к вам. Мастер осматривает мебель на месте, берём для перетяжки сами и привозим готовую. Доставка по Москве бесплатная. Простые работы (стулья, небольшие кресла) можем выполнить прямо у вас дома.',
  },
  {
    q: 'Какие ткани вы используете?',
    a: 'Работаем с более чем 500 видами тканей: велюр, рогожка, жаккард, микрофибра, экокожа, натуральная кожа. Все ткани сертифицированы, прошли проверку на износостойкость. Привозим каталог к вам домой — выбирайте в реальных условиях освещения.',
  },
  {
    q: 'Когда нужно платить?',
    a: 'Предоплата 30% при подписании договора, остаток — после приёмки готовой мебели. Принимаем наличные и карту. Если работа вам не нравится — дорабатываем до результата или возвращаем деньги.',
  },
];

const WORRIES = [
  { worry: 'Боитесь, что цена вырастет в процессе?', solution: 'Фиксируем стоимость в договоре. Никаких доплат.' },
  { worry: 'Переживаете за сохранность мебели?', solution: 'Страхуем мебель при транспортировке на 100% стоимости.' },
  { worry: 'Не уверены в качестве?', solution: 'Показываем результат до оплаты. Принимаете — платите.' },
  { worry: 'Долго ждать?', solution: 'Срок 2–5 дней. Срочный заказ — 1 день.' },
];

/* ─── Компонент таймера обратного отсчёта ────────────────────────── */
function Countdown() {
  const getEnd = () => {
    const d = new Date();
    d.setDate(d.getDate() + (7 - d.getDay()));
    d.setHours(23, 59, 59, 0);
    return d.getTime();
  };
  const calc = () => {
    const diff = Math.max(0, getEnd() - Date.now());
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <div className="flex items-center gap-3">
      {[{ v: t.d, l: 'дн' }, { v: t.h, l: 'ч' }, { v: t.m, l: 'мин' }, { v: t.s, l: 'сек' }].map(({ v, l }) => (
        <div key={l} className="timer-block">
          <div className="timer-num">{pad(v)}</div>
          <div className="text-[10px] uppercase tracking-wider opacity-70">{l}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── Главный компонент ──────────────────────────────────────────── */
export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({ type: '', name: '', phone: '' });

  const COPPER = 'hsl(var(--copper))';
  const NAVY   = 'hsl(var(--navy))';

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">

      {/* ── TOP BAR ───────────────────────────────────────────── */}
      <div className="bg-[hsl(var(--navy))] text-white text-xs py-2 px-6 text-center">
        <span className="opacity-80">Акция до конца недели — </span>
        <strong>скидка 20% на перетяжку 2 предметов и более.</strong>
        <span className="opacity-80"> Осталось: </span>
        <Countdown />
      </div>

      {/* ── HEADER ────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-4" style={{ height: '72px' }}>

          {/* Логотип */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 copper-gradient rounded flex items-center justify-center">
              <Icon name="Sofa" size={16} className="text-white" />
            </div>
            <div>
              <div className="font-black text-sm leading-tight tracking-tight">АТЕЛЬЕ МЕБЕЛИ</div>
              <div className="text-[10px] text-muted-foreground tracking-wider uppercase">Москва · С 2013 года</div>
            </div>
          </div>

          {/* Фото мастера — центр шапки */}
          <div className="hidden lg:flex items-center gap-4 bg-[hsl(var(--cream))] border border-border rounded-xl px-4 py-2">
            <img
              src={IMG.master}
              alt="Мастер за работой"
              className="w-10 h-10 rounded-lg object-cover object-top shrink-0"
            />
            <div>
              <div className="font-bold text-sm leading-tight">Александр — старший мастер</div>
              <div className="text-xs text-muted-foreground">12 лет опыта · более 2 000 работ</div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Icon key={i} name="Star" size={11} className="text-yellow-400 fill-yellow-400" />)}
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {n}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="text-right">
              <a href="tel:+74950000000" className="font-black text-base hover:text-[hsl(var(--copper))] transition-colors">
                +7 (495) 000-00-00
              </a>
              <div className="text-[10px] text-muted-foreground">Ежедневно с 8:00 до 21:00</div>
            </div>
            <Button className="btn-copper px-5 h-9 text-sm rounded-md">Бесплатный замер</Button>
          </div>

          <button className="lg:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-white px-6 py-5 flex flex-col gap-4">
            {/* Фото мастера в мобильном меню */}
            <div className="flex items-center gap-3 bg-[hsl(var(--cream))] rounded-xl p-3">
              <img src={IMG.master} alt="Мастер" className="w-12 h-12 rounded-lg object-cover object-top" />
              <div>
                <div className="font-bold text-sm">Александр — старший мастер</div>
                <div className="text-xs text-muted-foreground">12 лет опыта · 2 000+ работ</div>
              </div>
            </div>
            {NAV.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="font-medium py-1">{n}</a>)}
            <a href="tel:+74950000000" className="font-black text-lg">+7 (495) 000-00-00</a>
            <Button className="btn-copper">Бесплатный замер</Button>
          </div>
        )}
      </header>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[hsl(var(--cream))]">
        {/* Фоновое изображение */}
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--cream))] via-[hsl(var(--cream))]/95 to-[hsl(var(--cream))]/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Левая часть */}
          <div className="animate-fade-up">
            <div className="tag bg-[hsl(var(--copper))]/10 text-[hsl(var(--copper))] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--copper))] animate-pulse" />
              №1 по перетяжке мебели в Москве · 3 500+ работ
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.04] mb-6 tracking-tight text-[hsl(var(--navy))]">
              Перетяжка мебели<br />
              <span style={{ color: COPPER }}>в 3 раза дешевле</span><br />
              новой
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Восстанавливаем диваны, кресла и стулья за 2–5 дней. Гарантия 3 года.
              Платите <strong className="text-foreground">только после приёмки</strong> готовой работы.
            </p>

            {/* Мини-доверие */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {['Бесплатный выезд', 'Договор и гарантия', 'Срок от 2 дней', 'Страховка', 'Цена в договоре', 'Привозим каталог'].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-4 h-4 rounded-full bg-[hsl(var(--copper))] flex items-center justify-center shrink-0">
                    <Icon name="Check" size={10} className="text-white" />
                  </div>
                  {t}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="btn-copper px-8 h-12 text-base rounded-md">
                <Icon name="Phone" size={18} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-border h-12 px-8 text-base font-semibold rounded-md">
                Смотреть работы
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {['ОС', 'МД', 'АК', 'ПВ'].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--copper-light))] to-[hsl(var(--copper-dark))] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">{i}</div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <Icon key={i} name="Star" size={12} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <span><strong>4.97</strong> из 5 · 312 отзывов на Яндекс.Картах</span>
              </div>
            </div>
          </div>

          {/* Правая часть — форма + фото */}
          <div className="animate-fade-up-2">
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 overflow-hidden border border-border">
              {/* Шапка формы */}
              <div className="copper-gradient p-5 text-white">
                <div className="font-black text-lg mb-0.5">Узнайте стоимость за 1 минуту</div>
                <div className="text-sm opacity-90">Бесплатный расчёт · Без обязательств</div>
              </div>

              {/* Шаги формы */}
              <div className="p-6">
                {formStep === 1 && (
                  <div>
                    <p className="font-bold mb-4 text-sm">Что хотите перетянуть?</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: 'Sofa',       label: 'Диван' },
                        { icon: 'Armchair',   label: 'Кресло' },
                        { icon: 'SquareStack',label: 'Стулья' },
                        { icon: 'BedDouble',  label: 'Изголовье' },
                        { icon: 'Wrench',     label: 'Реставрация' },
                        { icon: 'HelpCircle', label: 'Другое' },
                      ].map((item) => (
                        <button
                          key={item.label}
                          onClick={() => { setFormData({ ...formData, type: item.label }); setFormStep(2); }}
                          className="flex items-center gap-3 p-3 rounded-xl border-2 border-border hover:border-[hsl(var(--copper))] hover:bg-[hsl(var(--copper))]/5 transition-all text-left font-medium text-sm group"
                        >
                          <Icon name={item.icon} size={20} className="text-muted-foreground group-hover:text-[hsl(var(--copper))]" />
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {formStep === 2 && (
                  <div>
                    <button onClick={() => setFormStep(1)} className="text-muted-foreground text-xs mb-4 flex items-center gap-1 hover:text-foreground">
                      <Icon name="ChevronLeft" size={14} /> Назад
                    </button>
                    <p className="font-bold mb-1 text-sm">Выбрано: <span className="text-[hsl(var(--copper))]">{formData.type}</span></p>
                    <p className="text-sm text-muted-foreground mb-4">Оставьте контакты — мастер перезвонит за 15 минут и назовёт точную цену</p>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--copper))] transition-colors"
                      />
                      <input
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--copper))] transition-colors"
                      />
                      <Button className="w-full btn-copper h-12 text-base rounded-xl" onClick={() => setFormStep(3)}>
                        Узнать стоимость бесплатно
                      </Button>
                    </div>
                    <p className="text-[10px] text-muted-foreground text-center mt-3">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="CheckCircle" size={32} className="text-green-500" />
                    </div>
                    <h3 className="font-black text-xl mb-2">Заявка принята!</h3>
                    <p className="text-muted-foreground text-sm">
                      Мастер перезвонит вам в течение 15 минут и рассчитает точную стоимость.
                    </p>
                    <div className="mt-4 p-3 bg-[hsl(var(--copper))]/5 rounded-xl">
                      <p className="text-sm font-semibold text-[hsl(var(--copper))]">Пока ждёте — подготовьте фото мебели.</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Так мастер сможет дать предварительную оценку быстрее.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <div className="navy-section py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
            {STATS.map((s) => (
              <div key={s.label} className="animate-count">
                <div className="text-3xl md:text-4xl font-black text-[hsl(var(--copper-light))]">{s.val}</div>
                <div className="text-sm opacity-70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TRUST ─────────────────────────────────────────────── */}
      <section className="py-12 bg-[hsl(var(--cream))] border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TRUST.map((t) => (
              <div key={t.text} className="flex flex-col items-center text-center gap-2 p-4 bg-white rounded-xl border border-border">
                <div className="w-10 h-10 copper-gradient rounded-lg flex items-center justify-center">
                  <Icon name={t.icon} size={20} className="text-white" />
                </div>
                <span className="text-xs font-semibold leading-snug">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="py-24" id="услуги">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-3">Что мы делаем</p>
              <h2 className="section-title">Наши услуги</h2>
            </div>
            <p className="text-muted-foreground max-w-xs text-sm">
              Берёмся за любую мягкую мебель — независимо от возраста, бренда и конфигурации.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title}
                className="group relative bg-white border border-border rounded-2xl p-7 card-hover cursor-pointer">
                {s.tag && (
                  <span className="absolute top-4 right-4 tag bg-[hsl(var(--copper))]/10 text-[hsl(var(--copper))]">
                    {s.tag}
                  </span>
                )}
                <div className="w-12 h-12 copper-gradient rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon name={s.icon} size={24} className="text-white" fallback="Wrench" />
                </div>
                <h3 className="font-black text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-black text-[hsl(var(--copper))]">{s.price}</span>
                  <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-[hsl(var(--copper))] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE/AFTER ──────────────────────────────────────── */}
      <section className="py-24 bg-[hsl(var(--cream))] border-y border-border" id="портфолио">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-3">Наши работы</p>
            <h2 className="section-title">До и после — разница очевидна</h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Перетащите ползунок, чтобы увидеть разницу. Реальные работы наших мастеров.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <BeforeAfter before={IMG.before} after={IMG.after} label="Угловой диван — велюр шоколад" />
            </div>
            <div>
              <BeforeAfter before={IMG.ba2} after={IMG.result} label="Кресло — натуральная кожа" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-4">И ещё 3 400+ выполненных работ в нашем портфолио</p>
            <Button variant="outline" className="border-border font-semibold">
              Смотреть все работы <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── FABRICS ───────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Материалы</p>
              <h2 className="section-title mb-6">500+ видов тканей на выбор</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Привозим каталог к вам домой — выбираете ткань в реальных условиях освещения вашего интерьера.
                Все материалы сертифицированы и прошли тест на износостойкость.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {FABRICS.map((f) => (
                  <div key={f.name} className="flex items-center gap-3 p-4 bg-[hsl(var(--cream))] rounded-xl border border-border">
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <div className="font-bold text-sm">{f.name}</div>
                      <div className="text-xs text-muted-foreground">{f.colors} цветов · <span className="text-[hsl(var(--copper))] font-semibold">{f.note}</span></div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="btn-copper mt-8">
                Смотреть каталог тканей
              </Button>
            </div>
            <div className="relative">
              <img src={IMG.fabrics} alt="Ткани для перетяжки мебели" className="w-full rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-5 -left-5 bg-white border border-border rounded-2xl p-5 shadow-xl">
                <div className="font-black text-3xl text-[hsl(var(--copper))]">500+</div>
                <div className="text-sm text-muted-foreground font-medium">видов тканей</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEPS ─────────────────────────────────────────────── */}
      <section className="py-24 navy-section" id="как-работаем">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[hsl(var(--copper-light))] mb-3">Процесс работы</p>
            <h2 className="section-title text-white">Как мы работаем</h2>
            <p className="text-white/60 mt-4 max-w-lg">
              Полный цикл за 2–5 дней. Вы не тратите время — мы забираем и привозим.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="number-big text-white/10 mb-2">{s.n}</div>
                <div className="w-10 h-10 copper-gradient rounded-lg flex items-center justify-center mb-4">
                  <Icon name={s.icon} size={18} className="text-white" />
                </div>
                <h3 className="font-black text-white text-lg mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <Icon name="ChevronRight" size={20} className="text-[hsl(var(--copper-light))]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICE ─────────────────────────────────────────────── */}
      <section className="py-24" id="прайс">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-3">Стоимость</p>
              <h2 className="section-title mb-2">Прайс-лист</h2>
              <p className="text-muted-foreground mb-8">
                Точная цена — после бесплатного выезда мастера. Ткань оплачивается отдельно.
              </p>
              <div className="space-y-0 border border-border rounded-2xl overflow-hidden">
                {PRICES.map((p, i) => (
                  <div key={p.name}
                    className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-[hsl(var(--cream))]'} ${p.popular ? 'border-l-4 border-l-[hsl(var(--copper))]' : ''}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-sm">{p.name}</span>
                      {p.popular && (
                        <span className="tag bg-[hsl(var(--copper))]/10 text-[hsl(var(--copper))] text-[9px]">Топ</span>
                      )}
                    </div>
                    <span className="font-black text-base">от {p.from} ₽</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-xs mt-4">
                * В цену включена работа мастера. Стоимость ткани — от 500 ₽/м², зависит от выбранного материала.
              </p>
            </div>

            {/* Форма расчёта */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-[hsl(var(--navy))] text-white rounded-2xl overflow-hidden">
                <div className="p-8">
                  <h3 className="font-black text-2xl mb-2">Не знаете точную цену?</h3>
                  <p className="text-white/70 mb-6">Мастер приедет бесплатно, осмотрит мебель и рассчитает стоимость за 20 минут</p>

                  <div className="space-y-3">
                    <input type="text" placeholder="Ваше имя"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--copper-light))]" />
                    <input type="tel" placeholder="+7 (___) ___-__-__"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[hsl(var(--copper-light))]" />
                    <Button className="w-full bg-[hsl(var(--copper))] hover:bg-[hsl(var(--copper-dark))] text-white font-bold h-12 rounded-xl text-base">
                      Вызвать мастера бесплатно
                    </Button>
                  </div>

                  <div className="flex flex-col gap-2 mt-6">
                    {WORRIES.map((w) => (
                      <div key={w.worry} className="flex items-start gap-3 text-sm">
                        <Icon name="CheckCircle" size={16} className="text-[hsl(var(--copper-light))] mt-0.5 shrink-0" />
                        <span className="text-white/80">{w.solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROMO BANNER ──────────────────────────────────────── */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="copper-gradient rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white">
                <div className="tag bg-white/20 text-white mb-4">Акция до конца недели</div>
                <h3 className="text-2xl md:text-3xl font-black mb-2">2 предмета и более — минус 20%</h3>
                <p className="opacity-80 mb-4">Перетяните диван и кресло вместе — сэкономьте до 9 000 ₽</p>
                <div className="text-white/90">
                  До конца акции: <Countdown />
                </div>
              </div>
              <Button size="lg" className="bg-white text-[hsl(var(--copper-dark))] hover:bg-white/90 font-black px-10 h-12 rounded-xl text-base shrink-0 shadow-xl">
                Получить скидку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────── */}
      <section className="py-24 bg-[hsl(var(--cream))] border-y border-border" id="отзывы">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-3">Отзывы клиентов</p>
              <h2 className="section-title">312 довольных клиентов</h2>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="font-black text-2xl">4.97</span>
                <span className="text-muted-foreground text-sm">на Яндекс.Картах</span>
              </div>
            </div>
            <Button variant="outline" className="border-border font-semibold shrink-0">
              Все отзывы на Яндекс.Картах <Icon name="ExternalLink" size={14} className="ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white border border-border rounded-2xl p-7 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 copper-gradient rounded-full flex items-center justify-center text-white font-black text-sm">
                      {r.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.city}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-0.5 mb-1 justify-end">
                      {[...Array(r.stars)].map((_, i) => <Icon key={i} name="Star" size={12} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <div className="text-xs text-muted-foreground">{r.date}</div>
                  </div>
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4">«{r.text}»</p>
                <div className="flex items-center gap-2">
                  <Icon name="Tag" size={12} className="text-[hsl(var(--copper))]" />
                  <span className="text-xs text-muted-foreground">{r.order}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-24" id="вопросы">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Вопросы и ответы</p>
            <h2 className="section-title">Частые вопросы</h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <button
                key={f.q}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left bg-white border border-border rounded-2xl px-7 py-5 hover:border-[hsl(var(--copper))]/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-sm md:text-base">{f.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === i ? 'bg-[hsl(var(--copper))] text-white' : 'bg-[hsl(var(--cream))]'}`}>
                    <Icon name={openFaq === i ? 'Minus' : 'Plus'} size={16} />
                  </div>
                </div>
                {openFaq === i && (
                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed animate-fade-up">{f.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="py-24 navy-section" id="контакты">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-[hsl(var(--copper-light))] mb-5">Готовы начать?</p>
          <h2 className="section-title text-white mb-6 max-w-3xl mx-auto">
            Подарите своей мебели вторую жизнь — уже на этой неделе
          </h2>
          <p className="text-white/60 mb-10 max-w-lg mx-auto text-lg">
            Бесплатный выезд мастера, расчёт стоимости в день обращения. Без предоплаты.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-[hsl(var(--copper))] hover:bg-[hsl(var(--copper-dark))] text-white font-black px-10 h-14 text-base rounded-xl shadow-lg shadow-[hsl(var(--copper))]/40">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать бесплатный замер
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-10 h-14 text-base rounded-xl">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto text-white/60 text-sm">
            <div className="text-center">
              <Icon name="Phone" size={20} className="mx-auto mb-2 text-[hsl(var(--copper-light))]" />
              <div className="font-bold text-white">+7 (495) 000-00-00</div>
              <div>Ежедневно 8–21</div>
            </div>
            <div className="text-center">
              <Icon name="MapPin" size={20} className="mx-auto mb-2 text-[hsl(var(--copper-light))]" />
              <div className="font-bold text-white">Вся Москва</div>
              <div>и ближнее Подмосковье</div>
            </div>
            <div className="text-center">
              <Icon name="Clock" size={20} className="mx-auto mb-2 text-[hsl(var(--copper-light))]" />
              <div className="font-bold text-white">Срок от 2 дней</div>
              <div>Срочно — 1 день</div>
            </div>
            <div className="text-center">
              <Icon name="ShieldCheck" size={20} className="mx-auto mb-2 text-[hsl(var(--copper-light))]" />
              <div className="font-bold text-white">Гарантия 3 года</div>
              <div>Письменно в договоре</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="bg-[hsl(var(--navy))]/95 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 copper-gradient rounded flex items-center justify-center">
              <Icon name="Sofa" size={12} className="text-white" />
            </div>
            <span className="font-black text-white text-sm">АТЕЛЬЕ МЕБЕЛИ</span>
          </div>
          <div className="flex flex-wrap gap-5 justify-center">
            {NAV.map((n) => <a key={n} href="#" className="hover:text-white/80 transition-colors">{n}</a>)}
          </div>
          <div className="text-center md:text-right">
            <div>© 2026 Ателье мебели · Москва</div>
            <div className="mt-0.5">
              <a href="#" className="hover:text-white/70 transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}