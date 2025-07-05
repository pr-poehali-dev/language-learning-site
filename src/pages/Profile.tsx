import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const achievements = [
    {
      id: 1,
      name: "Первый шаг",
      description: "Завершил первый урок",
      icon: "Star",
      earned: true,
    },
    {
      id: 2,
      name: "Неделя подряд",
      description: "Занимался 7 дней подряд",
      icon: "Flame",
      earned: true,
    },
    {
      id: 3,
      name: "Болтун",
      description: "Завершил 10 голосовых упражнений",
      icon: "Mic",
      earned: true,
    },
    {
      id: 4,
      name: "Перфекционист",
      description: "Получил 100% в 5 уроках",
      icon: "Award",
      earned: false,
    },
    {
      id: 5,
      name: "Марафонец",
      description: "Занимался 30 дней подряд",
      icon: "Trophy",
      earned: false,
    },
    {
      id: 6,
      name: "Полиглот",
      description: "Изучил 3 языка",
      icon: "Globe",
      earned: false,
    },
  ];

  const stats = [
    { label: "Общий XP", value: "1,250", icon: "Zap" },
    { label: "Серия дней", value: "7", icon: "Flame" },
    { label: "Уроков завершено", value: "23", icon: "BookOpen" },
    { label: "Слов изучено", value: "156", icon: "MessageSquare" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <img
                src="/img/1b430d43-06d1-48f6-9e99-2adddf462bc5.jpg"
                alt="Профиль пользователя"
                className="w-24 h-24 rounded-full mx-auto border-4 border-primary shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                7
              </div>
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              Анна Петрова
            </h1>
            <p className="text-muted-foreground">Изучает английский язык</p>
            <Badge className="mt-2 bg-accent text-accent-foreground">
              Уровень 3
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="bg-white/80 backdrop-blur-sm border-primary/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={stat.icon as any}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Icon name="TrendingUp" size={20} />
                  Прогресс изучения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Уровень 3</span>
                      <span className="text-sm text-muted-foreground">
                        1,250 / 2,000 XP
                      </span>
                    </div>
                    <Progress value={62.5} className="h-3" />
                    <p className="text-xs text-muted-foreground mt-1">
                      До следующего уровня: 750 XP
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">
                        Английский язык
                      </span>
                      <span className="text-sm text-muted-foreground">36%</span>
                    </div>
                    <Progress value={36} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Произношение</span>
                      <span className="text-sm text-muted-foreground">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Грамматика</span>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Icon name="Award" size={20} />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        achievement.earned
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 bg-gray-50 opacity-60"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                          achievement.earned ? "bg-primary" : "bg-gray-400"
                        }`}
                      >
                        <Icon
                          name={achievement.icon as any}
                          size={16}
                          className="text-white"
                        />
                      </div>
                      <h4 className="font-medium text-sm text-primary">
                        {achievement.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Icon name="Calendar" size={20} />
                  Недельная активность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 justify-center">
                  {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map(
                    (day, index) => (
                      <div key={day} className="text-center">
                        <div className="text-xs text-muted-foreground mb-2">
                          {day}
                        </div>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            index < 5 ? "bg-primary" : "bg-gray-200"
                          }`}
                        >
                          {index < 5 && (
                            <Icon
                              name="Check"
                              size={16}
                              className="text-white"
                            />
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
                <div className="text-center mt-4">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Icon name="Flame" size={16} />
                    <span className="text-sm font-medium">Серия: 7 дней</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Target" size={16} className="mr-2" />
                Установить цель
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Icon name="Users" size={16} className="mr-2" />
                Найти друзей
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
