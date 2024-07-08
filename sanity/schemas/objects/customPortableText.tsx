import { defineField } from "sanity";

const CenteredIcon = () => <span style={{ fontWeight: "bold" }}>C</span>;

const Centered = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <p style={{ textAlign: "center", margin: 0 }} contentEditable={false}>{children} </p>;

export const customPortableText = defineField({
  title: "Portable Text",
  name: "customPortableText",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 1", value: "h1" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong", icon: () => 'B',  },
          {
            title: "Centered",
            value: "centered",
            component: Centered,
            icon: CenteredIcon,
          },
        ],
      },
    },
  ],
});
