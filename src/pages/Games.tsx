import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Games = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentGame, setCurrentGame] = useState<string | null>(null);

  const games = [
    {
      id: "pronunciation",
      title: "Произношение",
      description: "Повторяй слова и улучшай произношение",
      icon: "Mic",
      difficulty: "Легко",
      points: 50,
      color: "bg-blue-500",
    },
    {
      id: "wordmatch",
      title: "Найди пару",
      description: "Соедини слова с их переводом",
      icon: "Puzzle",
      difficulty: "Средне",
      points: 75,
      color: "bg-green-500",
    },
    {
      id: "listening",
      title: "Аудирование",
      description: "Слушай и выбирай правильный вариант",
      icon: "Headphones",
      difficulty: "Средне",
      points: 60,
      color: "bg-purple-500",
    },
    {
      id: "spelling",
      title: "Правописание",
      description: "Собери слово из букв",
      icon: "Type",
      difficulty: "Легко",
      points: 40,
      color: "bg-orange-500",
    },
    {
      id: "conversation",
      title: "Диалог",
      description: "Веди диалог с ИИ-собеседником",
      icon: "MessageCircle",
      difficulty: "Сложно",
      points: 100,
      color: "bg-red-500",
    },
    {
      id: "grammar",
      title: "Грамматика",
      description: "Исправь ошибки в предложениях",
      icon: "CheckCircle",
      difficulty: "Сложно",
      points: 90,
      color: "bg-indigo-500",
    },
  ];

  const startRecording = () => {
    setIsRecording(true);
    // Имитация записи
    setTimeout(() => {
      setIsRecording(false);
    }, 3000);
  };

  const PronunciationGame = () => (
    <Card className="bg-white/80 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Icon name="Mic" size={20} />
          Произношение: "Hello"
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center space-y-6">
          <div className="text-6xl mb-4">👋</div>
          <div className="text-3xl font-bold text-primary mb-2">Hello</div>
          <div className="text-muted-foreground mb-6">/həˈloʊ/</div>

          <div className="space-y-4">
            <Button
              size="lg"
              className="w-full bg-blue-500 hover:bg-blue-600"
              onClick={() => {
                // Воспроизведение звука
                const utterance = new SpeechSynthesisUtterance("Hello");
                utterance.lang = "en-US";
                speechSynthesis.speak(utterance);
              }}
            >
              <Icon name="Volume2" size={20} className="mr-2" />
              Прослушать
            </Button>

            <Button
              size="lg"
              className={`w-full ${isRecording ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90"}`}
              onClick={startRecording}
              disabled={isRecording}
            >
              <Icon name="Mic" size={20} className="mr-2" />
              {isRecording ? "Записываю..." : "Произнести"}
            </Button>

            {isRecording && (
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">
                  Слушаю ваше произношение...
                </span>
              </div>
            )}
          </div>

          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Прогресс</span>
              <span className="text-sm text-muted-foreground">7/10</span>
            </div>
            <Progress value={70} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (currentGame === "pronunciation") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentGame(null)}
              >
                <Icon name="ArrowLeft" size={20} />
              </Button>
              <h1 className="text-2xl font-bold text-primary">
                Игра: Произношение
              </h1>
            </div>
            <PronunciationGame />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Игровые упражнения
          </h1>
          <p className="text-lg text-muted-foreground">
            Изучай язык играя! Выбери упражнение и начни играть
          </p>
        </div>

        <div className="mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Icon name="Gamepad2" size={20} />
                Сегодняшний прогресс
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Target" size={16} className="text-primary" />
                    <span className="text-sm">Цель: 5 игр</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-green-500"
                    />
                    <span className="text-sm">Выполнено: 3</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={16} className="text-yellow-500" />
                  <span className="text-sm font-medium">+180 XP</span>
                </div>
              </div>
              <Progress value={60} className="h-2" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card
              key={game.id}
              className="cursor-pointer transition-all hover:scale-105 bg-white/80 backdrop-blur-sm border-primary/20"
              onClick={() => setCurrentGame(game.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${game.color}`}
                  >
                    <Icon
                      name={game.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">
                      {game.difficulty}
                    </div>
                    <div className="text-xs text-accent font-medium">
                      +{game.points} XP
                    </div>
                  </div>
                </div>
                <CardTitle className="text-primary">{game.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {game.description}
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Играть
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Игровые достижения
              </h3>
              <p className="text-muted-foreground mb-6">
                Зарабатывай очки и получай награды за активную игру
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Trophy" size={20} />
                  <div className="text-left">
                    <div className="font-semibold">Чемпион дня</div>
                    <div className="text-sm text-muted-foreground">
                      Выполни 10 игр
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Flame" size={20} />
                  <div className="text-left">
                    <div className="font-semibold">Огненная серия</div>
                    <div className="text-sm text-muted-foreground">
                      7 дней подряд
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Star" size={20} />
                  <div className="text-left">
                    <div className="font-semibold">Перфекционист</div>
                    <div className="text-sm text-muted-foreground">
                      100% результат
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Games;
