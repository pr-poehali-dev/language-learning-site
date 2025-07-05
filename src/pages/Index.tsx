import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <div className="mb-8">
            <img
              src="/img/93314d38-d955-454f-b4f5-58863a00f347.jpg"
              alt="Сова-учитель"
              className="w-32 h-32 mx-auto rounded-full shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Изучай языки играючи!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Интерактивные уроки, голосовые упражнения и система достижений. Учи
            новые языки весело и эффективно!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90"
            >
              Начать изучение <Icon name="ArrowRight" size={16} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Как это работает
            </Button>
          </div>
        </div>

        <div className="mb-16">
          <img
            src="/img/f328de66-4d52-45ac-9554-5f11643a8f26.jpg"
            alt="Люди изучают языки"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Голосовые упражнения
              </h3>
              <p className="text-muted-foreground">
                Совершенствуй произношение с помощью интерактивных голосовых
                заданий
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Система достижений
              </h3>
              <p className="text-muted-foreground">
                Зарабатывай очки, получай награды и соревнуйся с друзьями
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Gamepad2" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Игровой подход
              </h3>
              <p className="text-muted-foreground">
                Увлекательные мини-игры делают изучение языка интересным
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Начни свой путь прямо сейчас!
            </h2>
            <p className="text-muted-foreground mb-6">
              Присоединяйся к миллионам пользователей, которые уже изучают языки
              с нами
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-primary">
                <Icon name="Users" size={16} />
                <span className="text-sm">1М+ пользователей</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Icon name="Globe" size={16} />
                <span className="text-sm">20+ языков</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Icon name="Star" size={16} />
                <span className="text-sm">4.9 рейтинг</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
