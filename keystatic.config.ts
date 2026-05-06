import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: { owner: 'namjul', name: 'verenahobl' },
  },
  ui: {
    brand: { name: 'Verena Hobl – Design' },
  },
  collections: {
    projekte: collection({
      label: 'Projekte',
      slugField: 'title',
      path: 'src/content/projekte/*',
      schema: {
        title: fields.slug({ name: { label: 'Titel' } }),
        year: fields.text({ label: 'Jahr', description: 'z.B. "2025" oder "Seit 2020"' }),
        category: fields.select({
          label: 'Kategorie',
          options: [
            { label: 'Wandmalerei', value: 'wandmalerei' },
            { label: 'Illustration', value: 'illustration' },
            { label: 'Kalligrafie', value: 'kalligrafie' },
            { label: 'Hochzeit', value: 'hochzeit' },
            { label: 'Logo', value: 'logo' },
            { label: 'Skulpturen', value: 'skulpturen' },
            { label: 'Leinwand', value: 'leinwand' },
          ],
          defaultValue: 'wandmalerei',
        }),
        location: fields.text({
          label: 'Ort',
          validation: { isRequired: false },
        }),
        description: fields.text({
          label: 'Beschreibung',
          multiline: true,
          description: 'Max. 1–3 Sätze. Fakten zuerst. Kein Marketing.',
        }),
        images: fields.array(
          fields.text({ label: 'Bildpfad', description: 'z.B. /assets/projekte/gurkerl/01.jpg' }),
          { label: 'Bilder', itemLabel: (props) => props.fields.value.value || 'Bild' }
        ),
        credits: fields.array(
          fields.object({
            label: fields.text({ label: 'Name' }),
            url: fields.url({ label: 'URL' }),
          }),
          { label: 'Credits', itemLabel: (props) => props.fields.label.value || 'Credit' }
        ),
        process: fields.text({
          label: 'Entstehung',
          multiline: true,
          description: 'Skizzen, Prozessfotos, Beschreibung. Optional.',
          validation: { isRequired: false },
        }),
        prev: fields.text({ label: 'Vorheriges Projekt (Slug)', validation: { isRequired: false } }),
        next: fields.text({ label: 'Nächstes Projekt (Slug)', validation: { isRequired: false } }),
        available: fields.checkbox({
          label: 'Verfügbar für Anfragen',
          defaultValue: true,
        }),
      },
    }),
  },
});
