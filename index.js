module.exports = function render(content, ...datas) {
    if ('object' === typeof content) {
        let data;

        content = Array.from(content);

        for (let index in content) {
            content[index] = content[index].replace("\r\n", "\n").split("\n");
            for (let line in content[index]) content[index][line] = content[index][line];
            content[index] = content[index].join(' ');
            if (undefined !== (data = datas.shift())) content[index] += data;
        }

        content = content.join(' ').trim();
    }

    const template = document.createElement('template');
    template.innerHTML = content;

    const fragment = template.content.cloneNode(true);

    return [fragment.firstChild, fragment][+(1 < fragment.childNodes)];
}
