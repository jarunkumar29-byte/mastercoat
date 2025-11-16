# Design Guidelines: Painting Project Calculator & Management System

## Design Approach

**System**: Modern SaaS Dashboard Design inspired by Linear, Stripe Dashboard, and Notion
**Rationale**: Utility-focused business tool requiring efficiency, clarity, and professional trust. Information-dense interface with forms, calculations, and data displays.

## Core Design Principles

1. **Clarity First**: Every calculation and input must be immediately understandable
2. **Professional Trust**: Clean, polished interface that conveys business competence
3. **Efficiency**: Minimize clicks, maximize productivity for both business owner and clients
4. **Progressive Disclosure**: Show complexity only when needed

## Typography

**Font Families**: 
- Primary: Inter (Google Fonts) - Interface text, forms, data
- Accent: Space Grotesk (Google Fonts) - Headings, pricing displays

**Hierarchy**:
- Page Titles: text-4xl font-bold
- Section Headers: text-2xl font-semibold
- Card Titles: text-lg font-semibold
- Body Text: text-base font-normal
- Helper Text: text-sm
- Data/Numbers: text-3xl font-bold (pricing), text-xl font-semibold (calculations)

## Layout System

**Spacing Units**: Tailwind units of 3, 4, 6, 8, 12, 16, 20
- Component padding: p-6 or p-8
- Section spacing: space-y-8 or space-y-12
- Card gaps: gap-6
- Form field spacing: space-y-4

**Grid System**:
- Main container: max-w-7xl mx-auto px-4
- Calculator grid: grid-cols-1 lg:grid-cols-2 (visual + inputs)
- Project list: Single column with card layout
- Quote preview: Single column max-w-3xl

## Component Library

### Navigation Header
- Full-width sticky header with business name, navigation links, and prominent contact info (phone/email icons with numbers)
- Height: h-16
- Include quick-action CTA: "New Quote" button

### Calculator Section
**Layout**: Two-column on desktop
- **Left Column**: Visual diagram of selected shape (rectangle/circle/complex) with dynamic dimensions displayed
- **Right Column**: Input form with shape selector tabs, dimension inputs, instant price calculation display
- Real-time calculation updating as user types
- Large, prominent total display with "$2/sq ft" clearly shown

### Quote Generator Card
- Elevated card with rounded-xl borders
- Form sections: Client Info, Project Details, Measurements, Additional Notes
- Breakdown table showing: Area → Square Feet → Rate → Total
- Action buttons: "Generate PDF" and "Send to Client"

### Project List Dashboard
- Table/card hybrid view
- Each project card shows: Client name, address, sq ft, total cost, status badge, actions
- Status badges: "Pending", "In Progress", "Completed"
- Sortable by date, status, or cost

### Contact Form (Client-Facing)
- Clean, minimal form with fields: Name, Email, Phone, Project Type, Message
- Friendly helper text: "We'll respond within 24 hours"
- Submit button with confirmation state

### Contact Info Display
- Prominent section with business phone, email, and hours
- Use Heroicons for phone, envelope, clock icons
- Click-to-call and click-to-email functionality
- Optional: Business address if applicable

### Printable Quote View
- Clean, minimal layout optimized for printing
- Business header with logo/name and contact
- Client information block
- Itemized breakdown table
- Terms and signature line
- "Print Quote" button (hidden on print)

## Visual Hierarchy

**Cards & Containers**:
- Primary cards: rounded-xl with subtle shadow (shadow-sm)
- Nested sections: rounded-lg 
- Input fields: rounded-md with focus ring

**Elevation Layers**:
- Base page: No shadow
- Cards: shadow-sm
- Modals/Overlays: shadow-xl
- Dropdowns: shadow-lg

## Interactive States

**Buttons** (use standard Button component):
- Primary CTA: "Calculate", "Generate Quote", "Send"
- Secondary: "Clear", "Cancel"
- Sizes: Default (px-6 py-3), Large for primary actions (px-8 py-4)

**Form Inputs**:
- Standard height: h-12
- Focus state with ring effect
- Error states with border indication
- Labels: font-semibold text-sm above inputs

## Animations

**Minimal, Purposeful Only**:
- Number count-up animation when calculation updates (brief, satisfying)
- Smooth transitions for tab switching (duration-200)
- Form submission success checkmark animation
- No scroll animations, no decorative motion

## Responsive Behavior

**Breakpoints**:
- Mobile (base): Single column, stacked layout, collapsible project cards
- Tablet (md): Partial two-column for calculator
- Desktop (lg+): Full two-column layouts, expanded tables

**Mobile Priorities**:
- Calculator: Stack visual diagram above inputs
- Contact info: Horizontal scroll-safe display
- Project list: Simplified card view with expandable details

## Images

**No hero image needed** - this is a business tool, not a marketing page.

**Optional Visual Enhancements**:
- Shape diagrams: Use CSS/SVG to render rectangle, circle, and L-shape visualizations dynamically
- Business logo placeholder in header
- Success state illustrations (simple, icon-based)

## Key UX Patterns

- **Auto-save**: Project drafts save automatically
- **Inline validation**: Show field errors immediately
- **Confirmation dialogs**: For quote sending, project deletion
- **Toast notifications**: Success/error feedback in top-right corner
- **Empty states**: Friendly messages when no projects exist yet with CTA to create first quote