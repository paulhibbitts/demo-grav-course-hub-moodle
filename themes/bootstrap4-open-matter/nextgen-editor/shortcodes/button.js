window.nextgenEditor.addHook('hookInit', () => {
    window.nextgenEditor.addButtonGroup('bootstrap4-open-matter', {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/></svg>',
        label: 'Bootstrap4 Open Matter',
    });
});

window.nextgenEditor.addShortcode('button', {
    type: 'inline',
    plugin: 'bootstrap4-open-matter',
    title: 'Button',
    button: {
        label: 'Button',
        group: 'bootstrap4-open-matter',
    },
    attributes: {
      label: {
        type: String,
        title: 'Label',
        widget: 'input-text',
        default: 'Button Label',
      },
      url: {
        type: String,
        title: 'URL',
        widget: 'input-text',
        default: '',
        },
    },
    titlebar({ attributes }) {
        return `<strong>Button</strong>`;
    },
    content({ attributes }) {
        return `<span class="sc-button-wrapper button hint--bottom" data-hint="${attributes.url}">${attributes.label}</span>`;
    },
});
