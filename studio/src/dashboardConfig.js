export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60783af2a3cbd6040fe3c6d3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-sbue8t9a",
                  apiId: "eaab3da6-bb3d-4e3e-b91a-2eb4ba32a024",
                },
                {
                  buildHookId: "60783af2a85177ffcfca44f6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-hn8b84sb",
                  apiId: "9267c3ca-bf20-44c1-84ee-3d511aeecba6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tarungangwani/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-hn8b84sb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
