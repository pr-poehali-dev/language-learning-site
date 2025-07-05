import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Lessons = () => {
  const lessons = [
    {
      id: 1,
      title: "Основы",
      description: "Алфавит, произношение, первые слова",
      progress: 100,
      level: "Завершен",
      color: "bg-green-500",
      icon: "Check",
    },
    {
      id: 2,
      title: "Приветствие",
      description: "Как поздороваться и представиться",
      progress: 75,
      level: "3/4 урока",
      color: "bg-blue-500",
      icon: "Play",
    },
    {
      id: 3,
      title: "Семья",
      description: "Рассказываем о родственниках",
      progress: 40,
      level: "2/5 уроков",
      color: "bg-purple-500",
      icon: "Users",
    },
    {
      id: 4,
      title: "Еда",
      description: "Названия блюд и напитков",
      progress: 0,
      level: "Заблокирован",
      color: "bg-gray-400",
      icon: "Lock",
    },
    {
      id: 5,
      title: "Время",
      description: "Как спросить и сказать время",
      progress: 0,
      level: "Заблокирован",
      color: "bg-gray-400",
      icon: "Lock",
    },
    {
      id: 6,
      title: "Путешествия",
      description: "Полезные фразы для поездок",
      progress: 0,
      level: "Заблокирован",
      color: "bg-gray-400",
      icon: "Lock",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Уроки английского языка
          </h1>
          <p className="text-lg text-muted-foreground">
            Изучай язык пошагово с интерактивными уроками
          </p>
        </div>

        <div className="mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Icon name="Target" size={20} />
                Твой прогресс
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Общий прогресс</span>
                <span className="text-sm text-muted-foreground">36%</span>
              </div>
              <Progress value={36} className="h-2" />
              <div className="flex items-center justify-between mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Flame" size={16} className="text-orange-500" />
                  <span>Серия: 7 дней</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={16} className="text-yellow-500" />
                  <span>1,250 очков</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Card
              key={lesson.id}
              className={`cursor-pointer transition-all hover:scale-105 bg-white/80 backdrop-blur-sm border-primary/20 ${
                lesson.progress === 0 && lesson.level === "Заблокирован"
                  ? "opacity-60"
                  : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${lesson.color}`}
                  >
                    <Icon
                      name={lesson.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">
                      {lesson.level}
                    </div>
                    {lesson.progress > 0 && (
                      <div className="text-xs text-primary font-medium">
                        {lesson.progress}%
                      </div>
                    )}
                  </div>
                </div>
                <CardTitle className="text-primary">{lesson.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {lesson.description}
                </p>
                {lesson.progress > 0 && (
                  <div className="mb-4">
                    <Progress value={lesson.progress} className="h-2" />
                  </div>
                )}
                <Button
                  className={`w-full ${
                    lesson.progress === 0 && lesson.level === "Заблокирован"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                  disabled={
                    lesson.progress === 0 && lesson.level === "Заблокирован"
                  }
                >
                  {lesson.progress === 0 && lesson.level === "Заблокирован"
                    ? "Заблокирован"
                    : lesson.progress === 100
                      ? "Повторить"
                      : "Продолжить"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Готов к следующему уровню?
              </h3>
              <p className="text-muted-foreground mb-6">
                Заверши текущие уроки, чтобы разблокировать новые темы
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="BookOpen" size={16} />
                  <span className="text-sm">50+ уроков</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Headphones" size={16} />
                  <span className="text-sm">Аудио упражнения</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Trophy" size={16} />
                  <span className="text-sm">Награды и достижения</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
