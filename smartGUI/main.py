import psycopg2
from tkinter import *
from tkinter import ttk

def connect_db():
    return psycopg2.connect(
        dbname="artmobpav4_app01",
        user="artmobpav4_app01",
        password="Artem2163",
        host="pg3.sweb.ru",
        port="5432"
    )

# Функция для отображения всех данных из таблицы Cost
def show_costs():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM "public"."Cost"')
    records = cursor.fetchall()
    cursor.close()
    conn.close()
    
    # Очистка текстового виджета
    text.delete(1.0, END)

    # Вывод всех записей
    for record in records:
        text.insert(END, f"ID: {record[0]}, Description: {record[5]}," )


root = Tk()
root.title("Smart Business GUI")

ttk.Frame(borderwidth=1, relief=SOLID, padding=[8, 10])

root.mainloop()