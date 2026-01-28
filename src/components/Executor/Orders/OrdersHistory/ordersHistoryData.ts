export interface OrderStatus {
    id: number;
    name: string;
    type: "completed" | "in_progress" | "cancelled" | "pending" | "new";
}

export interface OrderHistoryItem {
    number: number;
    id: number;
    serviceName: string;
    customerFirstName: string;
    customerLastName: string;
    amount: number;
    status: OrderStatus;
}

export const ordersHistoryData: OrderHistoryItem[] = [
    {
        number: 1,
        id: 1023947,
        serviceName: "Установка кондиционера",
        customerFirstName: "Иван",
        customerLastName: "Петров",
        amount: 1500000,
        status: { id: 1, name: "Завершён", type: "completed" },
    },
    {
        number: 2,
        id: 1023952,
        serviceName: "Ремонт стиральной машины",
        customerFirstName: "Алексей",
        customerLastName: "Смирнов",
        amount: 800000,
        status: { id: 2, name: "В работе", type: "in_progress" },
    },
    {
        number: 3,
        id: 1023961,
        serviceName: "Уборка квартиры",
        customerFirstName: "Мария",
        customerLastName: "Козлова",
        amount: 350000,
        status: { id: 3, name: "Отменён", type: "cancelled" },
    },
    {
        number: 4,
        id: 1023978,
        serviceName: "Сантехнические работы",
        customerFirstName: "Дмитрий",
        customerLastName: "Волков",
        amount: 1200000,
        status: { id: 1, name: "Завершён", type: "completed" },
    },
    {
        number: 5,
        id: 1023985,
        serviceName: "Электромонтажные работы",
        customerFirstName: "Ольга",
        customerLastName: "Новикова",
        amount: 2000000,
        status: { id: 4, name: "Ожидание", type: "pending" },
    },
    {
        number: 6,
        id: 1024001,
        serviceName: "Поклейка обоев",
        customerFirstName: "Сергей",
        customerLastName: "Морозов",
        amount: 950000,
        status: { id: 2, name: "В работе", type: "in_progress" },
    },
    {
        number: 7,
        id: 1024013,
        serviceName: "Укладка плитки",
        customerFirstName: "Анна",
        customerLastName: "Соколова",
        amount: 1800000,
        status: { id: 1, name: "Завершён", type: "completed" },
    },
    {
        number: 8,
        id: 1024027,
        serviceName: "Установка дверей",
        customerFirstName: "Владимир",
        customerLastName: "Лебедев",
        amount: 600000,
        status: { id: 5, name: "Новый", type: "new" },
    },
    {
        number: 9,
        id: 1024034,
        serviceName: "Покраска стен",
        customerFirstName: "Екатерина",
        customerLastName: "Кузнецова",
        amount: 450000,
        status: { id: 1, name: "Завершён", type: "completed" },
    },
    {
        number: 10,
        id: 1024048,
        serviceName: "Сборка мебели",
        customerFirstName: "Артём",
        customerLastName: "Попов",
        amount: 300000,
        status: { id: 3, name: "Отменён", type: "cancelled" },
    },
    {
        number: 11,
        id: 1024055,
        serviceName: "Ремонт холодильника",
        customerFirstName: "Наталья",
        customerLastName: "Васильева",
        amount: 700000,
        status: { id: 2, name: "В работе", type: "in_progress" },
    },
    {
        number: 12,
        id: 1024063,
        serviceName: "Монтаж натяжного потолка",
        customerFirstName: "Павел",
        customerLastName: "Михайлов",
        amount: 2500000,
        status: { id: 1, name: "Завершён", type: "completed" },
    },
    {
        number: 13,
        id: 1024079,
        serviceName: "Замена окон",
        customerFirstName: "Татьяна",
        customerLastName: "Фёдорова",
        amount: 3200000,
        status: { id: 4, name: "Ожидание", type: "pending" },
    },
    {
        number: 14,
        id: 1024088,
        serviceName: "Химчистка дивана",
        customerFirstName: "Андрей",
        customerLastName: "Егоров",
        amount: 250000,
        status: { id: 5, name: "Новый", type: "new" },
    },
    {
        number: 15,
        id: 1024095,
        serviceName: "Установка видеонаблюдения",
        customerFirstName: "Юлия",
        customerLastName: "Козлова",
        amount: 1700000,
        status: { id: 1, name: "Завершён", type: "completed" },
    },
];
