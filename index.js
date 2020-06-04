module.exports = function() {
    return function attrsAlpha(tree) {
        tree.walk(function(node) {
            if (!node.attrs) return node;

            let attrs = Object.keys(node.attrs);

            if (attrs.length <= 1) return node;

            attrs.sort();

            let sortedAttrs = {};
            attrs.forEach(function(attr) {
                sortedAttrs[attr] = (node.attrs[attr]) ? node.attrs[attr] : true;
            });

            node.attrs = sortedAttrs;
            return node;
        });

        return tree;
    }
}