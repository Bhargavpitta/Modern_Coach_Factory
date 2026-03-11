# Task: Add Print and Mail Options for Every Module

## Steps to Complete:

- [x] 1. Add translations in `src/locales/en.ts` for print and mail buttons
- [x] 2. Add translations in `src/locales/hi.ts` for print and mail buttons  
- [x] 3. Create `src/components/common/PageActions.tsx` component with print and mail functionality
- [x] 4. Modify `src/components/ContentPage.tsx` to include PageActions component
- [x] 5. Test the implementation

## Implementation Details:

### 1. Translations (en.ts and hi.ts):
- `print`: "Print"
- `printPage`: "Print Page"
- `shareViaEmail`: "Share via Email"
- `email`: "Email"

### 2. PageActions Component:
- Print button: Opens browser print dialog
- Mail button: Opens mailto: link with page title and URL

### 3. ContentPage Integration:
- Add PageActions component at top-right of each page content area

## Completed:

- Added print and mail options to all pages rendered through ContentPage
- Supports both English and Hindi languages
- Buttons are hidden when printing (using print:hidden class)
- Responsive design with icons and text labels

