export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generate blog title depends on your blog information.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2799/2799954.png',
        aiPrompt: 'Give me some blog topic idea in bullet wise only based on given niche and outline and give me result in Rich text editor format.',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post content depends on your blog information.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/9623/9623631.png',
        aiPrompt: 'Generate Blog content based on topic and outline and give me result in Rich text editor format.',
        slug: 'blog-content-generation',
        form: [
            {
                label: 'Enter your blog Title',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    // {
    //     name: 'Blog Topic Ideas',
    //     desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    //     category: 'Blog',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497953.png',
    //     aiPrompt: 'Give me top 5 blog topic idea in bullet wise only based on given Blog Topic Ideas and outline and give me result in Rich text editor format.',
    //     slug: 'blog-topic-idea',
    //     form: [
    //         {
    //             label: 'Enter your blog niche',
    //             field: 'input',
    //             name: 'niche',
    //             required: true
    //         }
    //     ]
    // },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal youtube video title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'YouTube Tools',
        icon: '/youtube.png',
        aiPrompt: 'Give me best SEO optimized high ranked top youtube video title ideas and give me result in Rich text editor format.',
        slug: 'youtube-seo-title',
        form: [
            {
                label: 'Enter your YouTube video topic keyword',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter youtube description outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Description',
        desc: 'An AI tool for your personal youtube video description, generating powerfull description in your chosen language.',
        category: 'YouTube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/1913/1913879.png',
        aiPrompt: 'Generate youtube description with emoji under 4 to 5 lines and give me result in Rich text editor format.',
        slug: 'youtube-description',
        form: [
            {
                label: 'Enter your YouTube video topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter youtube outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'A versatile AI tool that acts as your personal YouTube video tag assistant, crafting engaging and viral descriptions in your preferred language.',
        category: 'YouTube Tools',
        icon: '/youtubetag.png',
        aiPrompt: 'Generate youtube tags in bullet points based on given topic and give me result in Rich text editor format.',
        slug: 'youtube-tag',
        form: [
            {
                label: 'Enter your YouTube video topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        category: 'Article',
        icon: '/article.png',
        aiPrompt: 'Rewrite the given article or blog post to ensure it is plagiarism-free while maintaining the original meaning and context. Provide the rewritten content in Rich Text Editor format.',
        slug: 'rewrite-article',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Email Writer',
        desc: 'Craft personalized and effective email messages for various purposes, from business correspondence to marketing campaigns.',
        category: 'product',
        icon: 'https://cdn-icons-png.flaticon.com/128/15465/15465653.png',
        aiPrompt: 'Generate customized email content based on the provided subject and description. Tailor the message for education or marketing or business purposes, ensuring clarity, persuasiveness, and professional tone. Present the generated email in Rich Text Editor format.',
        slug: 'email-writer',
        form: [
            {
                label: 'Email Subject',
                field: 'input',
                name: 'email',
                required: true
            },
            {
                label: 'Give overview about what you want in your mail',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        category: 'Article',
        icon: '/textimprover.png',
        aiPrompt: 'Improve the provided text by eliminating errors and redundancies, enhancing readability, and maintaining clarity. Perform a comprehensive tone analysis and suggest better word choices. Present the refined text in Rich Text Editor format.',
        slug: 'text-improver',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    // {
    //     name: 'Write Code',
    //     desc: 'AI Model to generate programming code in any language',
    //     category: 'code',
    //     icon: '/code.png',
    //     aiPrompt: 'Generate code based on the given requirements and specifications. Ensure the code is efficient, well-documented, and follows best practices. Present the completed code in Rich Text Editor format.',
    //     slug: 'write-code',
    //     form: [
    //         {
    //             label: 'Enter description of code you want along with Programming Language',
    //             field: 'textarea',
    //             name: 'code',
    //             required: true
    //         }
    //     ]
    // },
    {
        name: 'Abstract',
        desc: 'Create concise and compelling abstracts for your projects, capturing the essence and key aspects of your work.',
        category: 'text',
        icon: 'https://cdn-icons-png.flaticon.com/128/2328/2328966.png',
        aiPrompt: 'Generate a clear and concise abstract for your project based on the provided details. Highlight the objectives, methods, key findings, and significance of your project work. Ensure the abstract is informative, engaging, and suitable for presentation or publication. Give abstract in one paragraph and short. Present the generated abstract in Rich Text Editor format.',
        slug: 'abstract',
        form: [
            {
                label: 'Provide some description about your content',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'Enhance your text with this tool that seamlessly integrates emojis, making your messages more expressive and engaging. Perfect for social media posts, messages, and any text that needs a fun and lively touch.',
        category: 'text',
        icon: '/emoji.png',
        aiPrompt: 'Add appropriate emojis to the provided text to make it more expressive and engaging. Ensure the emojis match the context and tone of the message. Present the updated text in Rich Text Editor format.',
        slug: 'add-emoji-to-text',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    // {
    //     name: 'Instagram Post Generator',
    //     desc: 'Create eye-catching Instagram posts with this AI tool, designed to help you generate engaging and visually appealing content.',
    //     category: 'instagram',
    //     icon: 'https://cdn-icons-png.flaticon.com/128/174/174855.png',
    //     aiPrompt: 'Generate an Instagram post based on the given content and theme. Include a captivating caption, relevant hashtag suggestions, and layout ideas. Ensure the post is visually appealing and engaging. Present the generated post in Rich Text Editor format.',
    //     slug: 'instagram-post-generator',
    //     form: [
    //         {
    //             label: 'Enter Keywords for your post',
    //             field: 'input',
    //             name: 'keyword',
    //             required: true
    //         }
    //     ]
    // },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'Boost your Instagram visibility with this AI tool that generates relevant and trending hashtags for your posts. Tailored to fit your content and audience, these hashtags will help increase engagement and reach a broader audience.',
        category: 'instagram',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        aiPrompt: 'Generate a set of relevant and trending hashtags based on the given keyword. Ensure the hashtags are optimized to increase visibility and engagement. Present the hashtags in bullet points in Rich Text Editor format.',
        slug: 'instagram-hash-tag-generator',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keyword',
                required: true
            }
        ]
    },
    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text.',
        category: 'text',
        icon: 'https://cdn-icons-png.flaticon.com/128/3281/3281329.png',
        aiPrompt: 'Check the provided text for any grammatical errors, spelling mistakes, and punctuation issues. Correct these errors to ensure the text is grammatically sound and clear. Present the corrected text in Rich Text Editor format.',
        slug: 'english-grammer-check',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },

    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        category: 'code',
        icon: '/code2.png',
        aiPrompt: 'Generate code based on the given requirements and specifications. Ensure the code is efficient, well-documented, and follows best practices. Present the completed code in Rich Text Editor format.',
        slug: 'write-code',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'code',
                required: true
            }
        ]
    },
    // {
    //     name: 'Code Bug Detector',
    //     desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
    //     category: 'code',
    //     icon: '/warning.png',
    //     aiPrompt: 'Analyze the provided code to detect any bugs or errors. Identify and describe the issues found, and suggest possible solutions or fixes. Present the analysis and recommendations in Rich Text Editor format.',
    //     slug: 'code-bug-detector',
    //     form: [
    //         {
    //             label: 'Enter code which you want to understand',
    //             field: 'textarea',
    //             name: 'code',
    //             required: true
    //         }
    //     ]
    // },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        category: 'product',
        icon: 'https://cdn-icons-png.flaticon.com/128/1728/1728563.png',
        aiPrompt: 'Generate creative and catchy taglines based on the provided brand or product information. Ensure the taglines are engaging, memorable, and aligned with the brands message and target audience. Present the generated taglines in bullet points in Rich Text Editor format.',
        slug: 'tagline-generator',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'code',
                required: true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        category: 'product',
        icon: 'https://cdn-icons-png.flaticon.com/128/4059/4059938.png',
        aiPrompt: 'Create a compelling product description based on the provided product details. Highlight key features, benefits, and unique selling points. Ensure the description is engaging, informative, and persuasive. Present the product description in Rich Text Editor format.',
        slug: 'product-description',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'name',
                required: true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

]