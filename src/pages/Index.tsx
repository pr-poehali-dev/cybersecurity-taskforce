import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: 'Активных угроз', value: '1,247', icon: 'AlertTriangle', trend: '+12%' },
    { label: 'Защищённых систем', value: '8,934', icon: 'Shield', trend: '+5%' },
    { label: 'Заблокировано атак', value: '45.2K', icon: 'Lock', trend: '+23%' },
    { label: 'Время отклика', value: '< 2s', icon: 'Zap', trend: '-15%' },
  ];

  const solutions = [
    {
      title: 'Защита периметра',
      description: 'Комплексная защита сетевого периметра от внешних угроз с использованием AI',
      icon: 'Shield',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Мониторинг угроз',
      description: 'Непрерывный мониторинг и анализ событий безопасности в режиме реального времени',
      icon: 'Eye',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Реагирование на инциденты',
      description: 'Автоматизированное обнаружение и нейтрализация угроз за секунды',
      icon: 'Zap',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const services = [
    { name: 'Аудит безопасности', icon: 'FileSearch', price: 'от 150 000 ₽' },
    { name: 'Пентест', icon: 'Bug', price: 'от 200 000 ₽' },
    { name: 'SOC as a Service', icon: 'Radio', price: 'от 80 000 ₽/мес' },
    { name: 'Обучение персонала', icon: 'GraduationCap', price: 'от 50 000 ₽' },
    { name: 'Compliance консалтинг', icon: 'ClipboardCheck', price: 'от 100 000 ₽' },
    { name: 'Интеграция систем', icon: 'Plug', price: 'от 120 000 ₽' },
  ];

  const threats = [
    { 
      name: 'WannaCry', 
      type: 'Ransomware', 
      severity: 'Критическая', 
      detected: '2024-12-20',
      description: 'Шифровальщик-вымогатель, использующий уязвимость EternalBlue' 
    },
    { 
      name: 'Mirai Botnet', 
      type: 'Botnet', 
      severity: 'Высокая', 
      detected: '2024-12-18',
      description: 'Ботнет для DDoS-атак на IoT устройства' 
    },
    { 
      name: 'Emotet', 
      type: 'Trojan', 
      severity: 'Критическая', 
      detected: '2024-12-15',
      description: 'Многофункциональный троян для кражи данных' 
    },
    { 
      name: 'Zeus', 
      type: 'Banking Trojan', 
      severity: 'Высокая', 
      detected: '2024-12-12',
      description: 'Банковский троян для перехвата финансовых данных' 
    },
    { 
      name: 'Stuxnet', 
      type: 'Worm', 
      severity: 'Критическая', 
      detected: '2024-12-10',
      description: 'Червь для саботажа промышленных систем' 
    },
    { 
      name: 'DarkSide', 
      type: 'Ransomware', 
      severity: 'Критическая', 
      detected: '2024-12-08',
      description: 'Ransomware-as-a-Service для целевых атак' 
    },
  ];

  const filteredThreats = threats.filter(threat =>
    threat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    threat.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center cyber-glow">
              <Icon name="Shield" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold gradient-text">CyberGuard</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground/80 hover:text-foreground transition-colors">Главная</a>
            <a href="#solutions" className="text-foreground/80 hover:text-foreground transition-colors">Решения</a>
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">Услуги</a>
            <a href="#threats" className="text-foreground/80 hover:text-foreground transition-colors">База угроз</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-pulse-slow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              <Icon name="Sparkles" size={14} className="mr-1" />
              Платформа нового поколения
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Кибербезопасность
              <br />
              будущего уже здесь
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Защитите свой бизнес от современных киберугроз с помощью AI-powered решений и круглосуточного мониторинга
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 cyber-glow">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать защиту
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 animate-slide-up">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:scale-105 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon name={stat.icon as any} className="text-primary" size={24} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {stat.trend}
                  </Badge>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              <Icon name="Cpu" size={14} className="mr-1" />
              Наши решения
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Комплексная защита для вашего бизнеса
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Передовые технологии искусственного интеллекта и машинного обучения для предотвращения угроз
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 hover:shadow-2xl group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon name={solution.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
                <Button variant="ghost" className="mt-6 group-hover:text-primary">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Icon name="Briefcase" size={14} className="mr-1" />
              Услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Профессиональные услуги
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              От аудита до полного сопровождения ваших систем безопасности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-secondary/50 transition-all hover:scale-105 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Icon name={service.icon as any} className="text-secondary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.price}</p>
                  </div>
                  <Icon name="ChevronRight" className="text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" size={20} />
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              <Icon name="FileText" size={20} className="mr-2" />
              Запросить коммерческое предложение
            </Button>
          </div>
        </div>
      </section>

      <section id="threats" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-destructive/20 text-destructive border-destructive/30">
              <Icon name="Database" size={14} className="mr-1" />
              База угроз
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Актуальная база киберугроз
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Постоянно обновляемая информация о новейших вирусах и вредоносном ПО
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Поиск по названию или типу угрозы..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card border-border"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto grid gap-4">
            {filteredThreats.map((threat, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-destructive/50 transition-all hover:scale-[1.02] group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    threat.severity === 'Критическая' 
                      ? 'bg-destructive/20 animate-glow-pulse' 
                      : 'bg-orange-500/20'
                  }`}>
                    <Icon 
                      name="AlertTriangle" 
                      className={threat.severity === 'Критическая' ? 'text-destructive' : 'text-orange-500'} 
                      size={24} 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-destructive transition-colors">
                          {threat.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{threat.description}</p>
                      </div>
                      <Badge 
                        variant={threat.severity === 'Критическая' ? 'destructive' : 'outline'}
                        className="ml-4"
                      >
                        {threat.severity}
                      </Badge>
                    </div>
                    <div className="flex gap-4 mt-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Tag" size={16} />
                        <span>{threat.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Calendar" size={16} />
                        <span>{threat.detected}</span>
                      </div>
                    </div>
                  </div>
                  <Icon name="ChevronRight" className="text-muted-foreground group-hover:text-destructive group-hover:translate-x-1 transition-all" size={20} />
                </div>
              </Card>
            ))}
          </div>

          {filteredThreats.length === 0 && (
            <div className="text-center py-12">
              <Icon name="SearchX" className="mx-auto mb-4 text-muted-foreground" size={48} />
              <p className="text-muted-foreground text-lg">Угрозы не найдены</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <Card className="p-12 bg-card/80 backdrop-blur border-primary/50 text-center max-w-4xl mx-auto cyber-glow">
            <h2 className="text-4xl font-bold mb-4">
              Готовы защитить ваш бизнес?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Интегрируйте наши решения с вашими системами безопасности и получите полный контроль над защитой
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Plug" size={20} className="mr-2" />
                Начать интеграцию
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Консультация эксперта
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="text-white" size={20} />
              </div>
              <span className="text-lg font-bold">CyberGuard</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 CyberGuard. Профессиональная защита от киберугроз
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Globe" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
