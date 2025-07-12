import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const pricingPlans = [
    {
      id: "1month",
      name: "1 месяц",
      price: "299",
      period: "месяц",
      popular: false,
      features: [
        "Более 30 локаций",
        "Безлимитный трафик",
        "Без автоплатежей",
        "Kill Switch",
        "Поддержка 24/7",
      ],
    },
    {
      id: "3months",
      name: "3 месяца",
      price: "199",
      period: "месяц",
      popular: true,
      originalPrice: "299",
      features: [
        "Более 30 локаций",
        "Безлимитный трафик",
        "Без автоплатежей",
        "Kill Switch",
        "Поддержка 24/7",
        "Экономия 33%",
      ],
    },
    {
      id: "12months",
      name: "1 год",
      price: "99",
      period: "месяц",
      popular: false,
      originalPrice: "299",
      features: [
        "Более 30 локаций",
        "Безлимитный трафик",
        "Без автоплатежей",
        "Kill Switch",
        "Поддержка 24/7",
        "Экономия 67%",
      ],
    },
  ];

  const features = [
    {
      icon: "Shield",
      title: "Максимальная безопасность",
      description: "Военное шифрование AES-256 для полной защиты ваших данных",
    },
    {
      icon: "Globe",
      title: "30+ локаций",
      description:
        "Серверы по всему миру для быстрого и стабильного подключения",
    },
    {
      icon: "Zap",
      title: "Высокая скорость",
      description: "Без ограничений скорости и объема трафика",
    },
    {
      icon: "CreditCard",
      title: "Без автоплатежей",
      description: "Полный контроль подписки, платите только когда хотите",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-cyan-50 font-open-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-cyan-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan rounded-lg flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-montserrat font-bold text-gray-800">
              SecureVPN
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-cyan transition-colors"
            >
              Возможности
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-cyan transition-colors"
            >
              Тарифы
            </a>
            <Button
              variant="outline"
              className="border-cyan text-cyan hover:bg-cyan hover:text-white"
            >
              Войти
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-montserrat font-bold text-gray-800 mb-6 animate-fade-in">
              Защитите свою
              <span className="text-cyan block">приватность</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
              Быстрый и безопасный VPN с серверами в 30+ странах. Без
              логирования, без автоплатежей, полная свобода в интернете.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
              <Button
                size="lg"
                className="bg-cyan hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold"
              >
                Попробовать бесплатно
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-trust text-trust hover:bg-trust hover:text-white px-8 py-4 text-lg"
              >
                Смотреть демо
                <Icon name="Play" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="/img/a04ce7e1-7e3e-4904-a58f-229e37a29526.jpg"
                alt="VPN Security"
                className="w-64 h-64 object-contain animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-gray-800 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы создали VPN-сервис, который действительно защищает вашу
              приватность
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-cyan-50 transition-colors animate-fade-in"
              >
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size={32} className="text-cyan" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-gradient-to-br from-cyan-50 to-trust-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-gray-800 mb-4">
              Выберите ваш тариф
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей. Отменить можно в любой
              момент.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative ${plan.popular ? "ring-2 ring-cyan border-cyan" : "border-gray-200"} hover:shadow-xl transition-all animate-scale-in`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-cyan text-white px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-montserrat font-bold text-gray-800">
                    {plan.name}
                  </CardTitle>
                  <div className="pt-4">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-montserrat font-bold text-cyan">
                        {plan.price}₽
                      </span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500 mt-1">
                        <span className="line-through">
                          {plan.originalPrice}₽
                        </span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-cyan flex-shrink-0"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-cyan hover:bg-cyan-600" : "bg-trust hover:bg-trust-600"} text-white`}
                    size="lg"
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
            Начните защищать свою приватность уже сегодня
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам пользователей, которые доверяют нам свою
            безопасность в интернете
          </p>
          <Button
            size="lg"
            className="bg-cyan hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold"
          >
            Получить 7 дней бесплатно
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-cyan rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={20} className="text-white" />
                </div>
                <span className="text-xl font-montserrat font-bold text-white">
                  SecureVPN
                </span>
              </div>
              <p className="text-gray-400">
                Безопасный и быстрый VPN для защиты вашей приватности в
                интернете.
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-white mb-4">
                Продукт
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Приложения
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-white mb-4">
                Поддержка
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-white mb-4">
                Компания
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan transition-colors">
                    Условия использования
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SecureVPN. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
