const path = require('path');

module.exports = (def) => {
    const content = def
        .get('props')
        .map((prop) => {
            let result = []
            const key = prop.get('name').replace('spacing-', '');
            const value = prop.get('value');
            result = result.push(`  '${key}': ${value}`);
            return result;
        })
        .flatten(1)
        .toArray()
        .join(',\n');
    return `
        $${path.basename(def.getIn(['meta', 'file']), '.yml')}: (
            ${content}
        );`;
};