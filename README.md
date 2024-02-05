# Пример использования react-query в FSD (сделан совместно с авторами FSD)

## [Посмотреть на CodeSandbox](https://codesandbox.io/p/github/ruslan4432013/fsd-react-query-example/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clrti20ur00062e692m2srxkw%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clrti20ur00022e699yxhtzkr%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clrti20ur00042e69vnagesqm%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clrti20ur00052e6932ilzv6s%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clrti20ur00022e699yxhtzkr%2522%253A%257B%2522id%2522%253A%2522clrti20ur00022e699yxhtzkr%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clrti20ur00012e69gyct3luk%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clrti61l900022e675k2bx9ue%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A7%252C%2522startColumn%2522%253A22%252C%2522endLineNumber%2522%253A7%252C%2522endColumn%2522%253A22%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252Fapp%252Findex.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fentities%252Fpost%252Fapi%252Fget-detail-post%2522%252C%2522id%2522%253A%2522cls03tzf000jb2e68sf9cjrzs%2522%252C%2522mode%2522%253A%2522temporary%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cls03tzf000jb2e68sf9cjrzs%2522%257D%252C%2522clrti20ur00052e6932ilzv6s%2522%253A%257B%2522id%2522%253A%2522clrti20ur00052e6932ilzv6s%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clrti4ufd00rw2e698svcnz9l%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clrti4ufd00rw2e698svcnz9l%2522%257D%252C%2522clrti20ur00042e69vnagesqm%2522%253A%257B%2522id%2522%253A%2522clrti20ur00042e69vnagesqm%2522%252C%2522activeTabId%2522%253A%2522cls058iyw007p2e6838qlunyv%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522CSB_RUN_OUTSIDE_CONTAINER%253D1%2520devcontainer%2520templates%2520apply%2520--template-id%2520%255C%2522ghcr.io%252Fdevcontainers%252Ftemplates%252Ftypescript-node%255C%2522%2520--template-args%2520%27%257B%257D%27%2520--features%2520%27%255B%255D%27%2522%252C%2522id%2522%253A%2522clrti2czg00812e69dhww7ecz%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522cls058iyw007p2e6838qlunyv%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522id%2522%253A%2522cls09s0ja00mg2e68vzmmsxbb%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522cls09s0v5005ee7exe4jbedr5%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

## Описание

Проект является официальным учебным примером для демонстрации совместного использования 
технологии react-query и архитектурной методологии FSD

## Используемые технологии:
1. ***TypeScript***: Язык программирования, расширяющий возможности JavaScript с помощью статической типизации.
2. ***React*** - библиотека для создания пользовательских интерфейсов
3. ***Material UI*** - библиотека UI-компонентов
4. ***React Router*** - для управления маршрутизацией приложения
5. ***React Query*** - библиотека управления состоянием запросов к серверу



## Структура проекта

[По архитектуре FSD](https://feature-sliced.design/blog/rebranding-stable)

Структура проекта выглядит следующим образом:

```
|                               #
└── src/                        #
    ├── app/                    # Инициализирующая логика приложения                #
    |                           #
    ├── pages/                  # Слой: Страницы приложения
    |   ├── home/               #     Слайс: Главная страница постов с пагинацей
    |   |   ├── lib/            #         Сегмент: Логика хранения текущей страницы в query params
    |   |   |                   #       
    |   |   └── ui/             #         Сегмент: Логика UI отображения
    |   |                       # 
    |   └── post/               #     Слайс: Детальное отображение поста
    |       |                   #       
    |       └── ui/             #         Сегмент: Логика UI
    |                           #
    |                           #
    ├── entities/               # Слой: Бизнес-сущности
    |   └── post/               #     Слайс: сущность Поста
    |       ├── model/          # 
    |       ├── api/            #         Сегмент: Здесь пример с react-query
    |       └── ui/             # 
    |                           #
    |                           #
    └── shared/                 # Слой: Переиспользуемые модули, без привязки к бизнес-логике
        ├── api/                #         Сегмент: Api клиент
        ├── config/             #         Сегмент: Конфигурация приложения (API_URL, env_vars, ...)
        └── lib/                #         Сегмент: Инфраструктурная логика приложения (utils/helpers)
```
