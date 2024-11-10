// Simulando la obtención de datos
async function getData() {
    const data = [];
    for (let i = 1; i <= 100; i++) {
        data.push({
            id: i,
            title: `Artículo ${i}`,
            content: `Contenido completo del artículo ${i}...`,
            imageUrl: `https://example.com/image${i}.jpg`,
            thumbnailUrl: `https://example.com/thumb${i}.jpg`
        });
    }
    return data;
}

module.exports = { getData };
