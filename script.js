const products = [
            {"id": 1, "наименование": "Смартфон iPhone 15", "категория": "техника", "цена": 89990},
            {"id": 2, "наименование": "Ноутбук Dell XPS", "категория": "техника", "цена": 125000},
            {"id": 3, "наименование": "Наушники Sony WH-1000XM5", "категория": "техника", "цена": 32990},
            {"id": 4, "наименование": "Холодильник LG", "категория": "техника", "цена": 75900},
            {"id": 5, "наименование": "Хлеб Бородинский", "категория": "продукты", "цена": 65},
            {"id": 6, "наименование": "Молоко Простоквашино 3.2%", "категория": "продукты", "цена": 89},
            {"id": 7, "наименование": "Сыр Российский", "категория": "продукты", "цена": 450},
            {"id": 8, "наименование": "Яблоки Голден", "категория": "продукты", "цена": 120},
            {"id": 9, "наименование": "Кофе Jacobs", "категория": "продукты", "цена": 350},
            {"id": 10, "наименование": "Футболка мужская", "категория": "одежда", "цена": 1200},
            {"id": 11, "наименование": "Джинсы женские", "категория": "одежда", "цена": 3500},
            {"id": 12, "наименование": "Куртка зимняя пуховая", "категория": "одежда", "цена": 12500},
            {"id": 13, "наименование": "Кроссовки Nike", "категория": "одежда", "цена": 8900},
            {"id": 14, "наименование": "Платье вечернее", "категория": "одежда", "цена": 5600}
        ];

function showAllProducts() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    products.forEach(product => {
    const row = `<tr>
    <td>${product.id}</td>
    <td>${product.наименование}</td>
    <td>${product.категория}</td>
    <td>${product.цена.toLocaleString()}</td>
    </tr>`;
tbody.innerHTML += row;
    });
 }

function filterProducts() {
    const select = document.getElementById('categorySelect');
    const category = select.value;
    const tbody = document.getElementById('tableBody');
                
tbody.innerHTML = '';
            
const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.категория === category);
            
filteredProducts.forEach(product => {
const row = `<tr>
<td>${product.id}</td>
<td>${product.наименование}</td>
<td>${product.категория}</td>
<td>${product.цена.toLocaleString()}</td>
</tr>`;
tbody.innerHTML += row;
});
}
window.onload = showAllProducts;