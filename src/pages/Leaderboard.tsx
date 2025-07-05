import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Leaderboard = () => {
  const leaderboardData = [
    {
      id: 1,
      name: "Мария Смирнова",
      avatar: "👩‍🎓",
      points: 2850,
      level: 8,
      streak: 23,
      country: "🇷🇺",
      badge: "champion",
    },
    {
      id: 2,
      name: "Джон Доу",
      avatar: "👨‍💼",
      points: 2720,
      level: 7,
      streak: 15,
      country: "🇺🇸",
      badge: "second",
    },
    {
      id: 3,
      name: "Анна Петрова",
      avatar: "👩‍🦰",
      points: 2650,
      level: 7,
      streak: 18,
      country: "🇷🇺",
      badge: "third",
    },
    {
      id: 4,
      name: "Карлос Родригес",
      avatar: "👨‍🎨",
      points: 2480,
      level: 6,
      streak: 12,
      country: "🇪🇸",
      badge: null,
    },
    {
      id: 5,
      name: "Сакура Танака",
      avatar: "👩‍🔬",
      points: 2350,
      level: 6,
      streak: 9,
      country: "🇯🇵",
      badge: null,
    },
    {
      id: 6,
      name: "Пьер Дюпон",
      avatar: "👨‍🍳",
      points: 2280,
      level: 5,
      streak: 20,
      country: "🇫🇷",
      badge: null,
    },
    {
      id: 7,
      name: "Лука Росси",
      avatar: "👨‍🎭",
      points: 2150,
      level: 5,
      streak: 7,
      country: "🇮🇹",
      badge: null,
    },
    {
      id: 8,
      name: "Вы",
      avatar: "👤",
      points: 1250,
      level: 3,
      streak: 7,
      country: "🇷🇺",
      badge: null,
      isCurrentUser: true,
    },
  ];

  const weeklyLeaders = [
    { name: "Мария Смирнова", points: 850, change: "+2" },
    { name: "Анна Петрова", points: 720, change: "+1" },
    { name: "Джон Доу", points: 680, change: "-1" },
    { name: "Вы", points: 420, change: "+5" },
  ];

  const getRankBadge = (position: number, badge: string | null) => {
    if (badge === "champion") return "🏆";
    if (badge === "second") return "🥈";
    if (badge === "third") return "🥉";
    return `#${position}`;
  };

  const getRankColor = (position: number) => {
    if (position === 1) return "text-yellow-600";
    if (position === 2) return "text-gray-600";
    if (position === 3) return "text-orange-600";
    return "text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Рейтинг пользователей
          </h1>
          <p className="text-lg text-muted-foreground">
            Соревнуйся с друзьями и поднимайся в рейтинге
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Icon name="Trophy" size={20} />
                  Общий рейтинг
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-2">
                  {leaderboardData.map((user, index) => (
                    <div
                      key={user.id}
                      className={`flex items-center gap-4 p-4 hover:bg-primary/5 transition-colors ${
                        user.isCurrentUser
                          ? "bg-primary/10 border-l-4 border-primary"
                          : ""
                      }`}
                    >
                      <div
                        className={`text-2xl font-bold w-8 text-center ${getRankColor(index + 1)}`}
                      >
                        {getRankBadge(index + 1, user.badge)}
                      </div>

                      <div className="text-3xl">{user.avatar}</div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-primary">
                            {user.name}
                          </span>
                          <span className="text-lg">{user.country}</span>
                          {user.isCurrentUser && (
                            <Badge variant="secondary" className="text-xs">
                              Вы
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Уровень {user.level}</span>
                          <div className="flex items-center gap-1">
                            <Icon name="Flame" size={12} />
                            <span>{user.streak} дней</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-bold text-lg text-primary">
                          {user.points.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">XP</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Icon name="Calendar" size={20} />
                  Топ недели
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyLeaders.map((user, index) => (
                    <div
                      key={user.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">
                          {index + 1}.
                        </span>
                        <span className="text-sm text-primary">
                          {user.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                          {user.points}
                        </span>
                        <Badge
                          variant={
                            user.change.startsWith("+")
                              ? "default"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {user.change}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Icon name="Target" size={20} />
                  Ваша статистика
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Позиция
                    </span>
                    <span className="font-bold text-primary">#8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Очки</span>
                    <span className="font-bold text-primary">1,250 XP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      До топ-5
                    </span>
                    <span className="font-bold text-accent">1,100 XP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Серия</span>
                    <div className="flex items-center gap-1">
                      <Icon
                        name="Flame"
                        size={16}
                        className="text-orange-500"
                      />
                      <span className="font-bold text-primary">7 дней</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="text-4xl">🎯</div>
                  <h3 className="font-bold text-primary">
                    Поднимись в рейтинге!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Выполняй ежедневные задания и зарабатывай больше очков
                  </p>
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Icon name="Play" size={16} className="mr-2" />
                    Начать урок
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary text-center">
                <Icon name="Award" size={20} />
                Лиги и достижения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Shield" size={24} className="text-gray-600" />
                  </div>
                  <h4 className="font-semibold text-sm text-muted-foreground">
                    Бронзовая лига
                  </h4>
                  <p className="text-xs text-muted-foreground">0-499 XP</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Shield" size={24} className="text-gray-700" />
                  </div>
                  <h4 className="font-semibold text-sm text-muted-foreground">
                    Серебряная лига
                  </h4>
                  <p className="text-xs text-muted-foreground">500-1499 XP</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 ring-4 ring-yellow-200">
                    <Icon name="Shield" size={24} className="text-yellow-700" />
                  </div>
                  <h4 className="font-semibold text-sm text-primary">
                    Золотая лига
                  </h4>
                  <p className="text-xs text-muted-foreground">1500-2999 XP</p>
                  <Badge className="mt-1 text-xs">Ваша лига</Badge>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Crown" size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-sm text-muted-foreground">
                    Платиновая лига
                  </h4>
                  <p className="text-xs text-muted-foreground">3000+ XP</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
