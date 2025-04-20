This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
.gitignore
astro.config.mjs
package.json
public/favicon.svg
README.md
src/assets/background.svg
src/components/Welcome.astro
src/layouts/Layout.astro
src/pages/index.astro
tsconfig.json
```

# Files

## File: .gitignore
````
# build output
dist/

# generated types
.astro/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# environment variables
.env
.env.production

# macOS-specific files
.DS_Store

# jetbrains setting folder
.idea/
````

## File: astro.config.mjs
````
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});
````

## File: package.json
````json
{
  "name": "starlight",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^5.7.4"
  }
}
````

## File: public/favicon.svg
````
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
    <path d="M50.4 78.5a75.1 75.1 0 0 0-28.5 6.9l24.2-65.7c.7-2 1.9-3.2 3.4-3.2h29c1.5 0 2.7 1.2 3.4 3.2l24.2 65.7s-11.6-7-28.5-7L67 45.5c-.4-1.7-1.6-2.8-2.9-2.8-1.3 0-2.5 1.1-2.9 2.7L50.4 78.5Zm-1.1 28.2Zm-4.2-20.2c-2 6.6-.6 15.8 4.2 20.2a17.5 17.5 0 0 1 .2-.7 5.5 5.5 0 0 1 5.7-4.5c2.8.1 4.3 1.5 4.7 4.7.2 1.1.2 2.3.2 3.5v.4c0 2.7.7 5.2 2.2 7.4a13 13 0 0 0 5.7 4.9v-.3l-.2-.3c-1.8-5.6-.5-9.5 4.4-12.8l1.5-1a73 73 0 0 0 3.2-2.2 16 16 0 0 0 6.8-11.4c.3-2 .1-4-.6-6l-.8.6-1.6 1a37 37 0 0 1-22.4 2.7c-5-.7-9.7-2-13.2-6.2Z" />
    <style>
        path { fill: #000; }
        @media (prefers-color-scheme: dark) {
            path { fill: #FFF; }
        }
    </style>
</svg>
````

## File: README.md
````markdown
# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
````

## File: src/assets/background.svg
````
<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1024" fill="none"><path fill="url(#a)" fill-rule="evenodd" d="M-217.58 475.75c91.82-72.02 225.52-29.38 341.2-44.74C240 415.56 372.33 315.14 466.77 384.9c102.9 76.02 44.74 246.76 90.31 366.31 29.83 78.24 90.48 136.14 129.48 210.23 57.92 109.99 169.67 208.23 155.9 331.77-13.52 121.26-103.42 264.33-224.23 281.37-141.96 20.03-232.72-220.96-374.06-196.99-151.7 25.73-172.68 330.24-325.85 315.72-128.6-12.2-110.9-230.73-128.15-358.76-12.16-90.14 65.87-176.25 44.1-264.57-26.42-107.2-167.12-163.46-176.72-273.45-10.15-116.29 33.01-248.75 124.87-320.79Z" clip-rule="evenodd" style="opacity:.154"/><path fill="url(#b)" fill-rule="evenodd" d="M1103.43 115.43c146.42-19.45 275.33-155.84 413.5-103.59 188.09 71.13 409 212.64 407.06 413.88-1.94 201.25-259.28 278.6-414.96 405.96-130 106.35-240.24 294.39-405.6 265.3-163.7-28.8-161.93-274.12-284.34-386.66-134.95-124.06-436-101.46-445.82-284.6-9.68-180.38 247.41-246.3 413.54-316.9 101.01-42.93 207.83 21.06 316.62 6.61Z" clip-rule="evenodd" style="opacity:.154"/><defs><linearGradient id="b" x1="373" x2="1995.44" y1="1100" y2="118.03" gradientUnits="userSpaceOnUse"><stop stop-color="#D83333"/><stop offset="1" stop-color="#F041FF"/></linearGradient><linearGradient id="a" x1="107.37" x2="1130.66" y1="1993.35" y2="1026.31" gradientUnits="userSpaceOnUse"><stop stop-color="#3245FF"/><stop offset="1" stop-color="#BC52EE"/></linearGradient></defs></svg>
````

## File: src/components/Welcome.astro
````
---
// Import only the background asset
import background from '../assets/background.svg';

// Define placeholder URLs - REMEMBER TO REPLACE #
const desktopLinuxX64Link = "#"; // Link for Linux x64 desktop app
const desktopLinuxArm64Link = "#"; // Link for Linux ARM x64 desktop app
const desktopWindowsLink = "#"; // Link for Windows desktop app
const androidAppLink = "#";       // Link to download Android app
const webAppLink = "#";  
const docsLink = "https://dl-cdn.ryzerobotics.com/downloads/Tello/Tello%20SDK%202.0%20User%20Guide.pdf"; // Link to your Tello SDK documentation
---

<div id="container">
	<img id="background" src={background.src} alt="" fetchpriority="high" />
	<main>
        <!-- Hero Section for Text -->
        <section id="hero-content">
            <h1>Explore Applications Built with Tello SDK</h1>
            <p class="description">
                Access desktop, mobile, or web applications powered by the <a href={docsLink} target="_blank" rel="noopener noreferrer">Tello SDK</a> 
            </p>
        </section>

		<!-- Button Container -->
		<section id="button-container">
            <!-- Desktop App Dropdown -->
            <div class="dropdown-container">
                <button type="button" class="button dropdown-trigger">
                    Desktop App
                    <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <ul class="dropdown-menu">
                    <li><a href={desktopLinuxX64Link} target="_blank" rel="noopener noreferrer" class="dropdown-item">Linux x64</a></li>
                    <li><a href={desktopLinuxArm64Link} target="_blank" rel="noopener noreferrer" class="dropdown-item">Linux ARM x64</a></li>
                    <li><a href={desktopWindowsLink} target="_blank" rel="noopener noreferrer" class="dropdown-item">Windows</a></li>
                </ul>
            </div>

            <!-- Other Buttons -->
			<a class="button" href={androidAppLink} target="_blank" rel="noopener noreferrer">Android App</a>
			<a class="button" href={webAppLink}>Web App</a>
		</section>
	</main>
</div>

<style>
	/* --- Core Styles --- */
	:root {
		--text-light: #1f2937; /* Dark gray for text */
		--text-light-secondary: #4b5563; /* Medium gray */
        --text-light-inverted: #ffffff; /* White for buttons/dropdowns */
		--text-dark: #e5e7eb; /* Light gray for text */
		--text-dark-secondary: #9ca3af; /* Medium gray */
        --text-dark-inverted: #111827; /* Dark for dropdowns */
		--link-light: #4338ca; /* Indigo */
		--link-light-hover: #3730a3;
		--link-dark: #a5b4fc; /* Lighter Indigo */
		--link-dark-hover: #c7d2fe;
        --shadow-color-light: rgba(0, 0, 0, 0.08);
        --shadow-color-dark: rgba(0, 0, 0, 0.4); /* Darker shadow for contrast */
        --bg-dropdown-light: #ffffff;
        --bg-dropdown-dark: #2d3748; /* Dark gray-blue */
        --hover-dropdown-light: #f3f4f6; /* Very light gray */
        --hover-dropdown-dark: #4a5568; /* Medium dark gray */
	}

	#background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		filter: blur(90px);
		opacity: 0.45;
        object-fit: cover;
	}

	#container {
		height: 100%;
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--text-light);
        line-height: 1.6;
	}

	main {
		height: 100%;
		display: flex;
        flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 64px 24px;
        text-align: center;
        position: relative;
        z-index: 1;
	}

    /* --- Hero Content Styling (Unchanged) --- */
    #hero-content {
        max-width: 680px;
        margin-bottom: 56px;
    }
    #hero-content h1 {
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 700;
        margin-bottom: 20px;
        line-height: 1.25;
        color: var(--text-light);
        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
    }
    #hero-content .description {
        font-size: clamp(1rem, 2.5vw, 1.15rem);
        line-height: 1.7;
        color: var(--text-light-secondary);
        margin: 0;
         text-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
    }
    #hero-content .description a {
        color: var(--link-light);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s ease;
        border-bottom: 1px solid transparent;
    }
    #hero-content .description a:hover {
        color: var(--link-light-hover);
        border-bottom-color: var(--link-light-hover);
    }


	/* --- Button Container --- */
	#button-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: stretch; /* Align items to stretch vertically */
		width: 100%;
		max-width: 800px;
		gap: 24px;
	}

	/* --- Base Button Styling --- */
	.button {
        /* Using flex basis auto, allow shrinking but also growing a bit */
		flex: 0 1 auto;
        max-width: 240px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 14px 28px;
		color: var(--text-light-inverted);
		background: linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%);
		border-radius: 8px;
		border: none;
		text-decoration: none;
		font-weight: 500;
		font-size: 1rem;
		box-shadow: 0 2px 4px var(--shadow-color-light), 0 4px 6px var(--shadow-color-light);
		transition: all 0.25s ease-out;
		cursor: pointer;
		min-width: 140px;
		text-align: center;
        white-space: nowrap;
        height: 100%; /* Make buttons stretch to container height if align-items: stretch is used */
	}

	.button:hover {
		transform: translateY(-3px);
		box-shadow: 0 4px 8px var(--shadow-color-light), 0 6px 10px var(--shadow-color-light);
	}

	.button:active {
		transform: translateY(-1px);
		box-shadow: 0 1px 2px var(--shadow-color-light);
        filter: brightness(0.95);
	}

    /* --- Dropdown Specific Styling --- */
    .dropdown-container {
        position: relative; /* Context for absolute positioned menu */
        display: inline-block; /* Take space needed */
        /* Apply flex properties similar to buttons to fit in the container */
        flex: 0 1 auto;
        max-width: 240px;
        min-width: 140px;
    }

    .dropdown-trigger {
        width: 100%; /* Make trigger fill the container */
        justify-content: space-between; /* Space between text and arrow */
        /* Ensure padding is consistent */
        padding: 14px 20px 14px 28px; /* Adjust right padding for arrow */
    }

    .dropdown-arrow {
        margin-left: 8px;
        width: 1em;
        height: 1em;
        transition: transform 0.2s ease-in-out;
    }

    .dropdown-container:hover .dropdown-arrow {
        transform: rotate(180deg);
    }

    .dropdown-menu {
        position: absolute;
        top: calc(100% + 6px); /* Position below the trigger + small gap */
        left: 0;
        z-index: 100; /* Ensure it's above other elements */
        background-color: var(--bg-dropdown-light);
        border-radius: 6px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        padding: 8px 0; /* Vertical padding for the menu */
        margin: 0;
        list-style: none;
        min-width: 100%; /* Match the trigger width */
        /* Initial hidden state */
        opacity: 0;
        visibility: hidden;
        transform: translateY(5px); /* Start slightly lower */
        transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
    }

    .dropdown-container:hover .dropdown-menu,
    .dropdown-container:focus-within .dropdown-menu { /* Keep open on focus */
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .dropdown-item {
        display: block;
        padding: 10px 20px; /* Padding for items */
        color: var(--text-light-secondary);
        text-decoration: none;
        font-size: 0.95rem;
        white-space: nowrap;
        transition: background-color 0.15s ease, color 0.15s ease;
        text-align: left; /* Align text left in dropdown */
    }

    .dropdown-item:hover {
        background-color: var(--hover-dropdown-light);
        color: var(--text-light);
    }

	/* --- Responsive Adjustments --- */
    @media screen and (max-width: 768px) {
        main { padding: 48px 20px; }
        #hero-content { margin-bottom: 40px; }
        #button-container { gap: 20px; }
        .button, .dropdown-container {
             min-width: 130px;
             max-width: 200px;
         }
         .button, .dropdown-trigger {
              padding: 12px 24px;
          }
         /* Adjust dropdown trigger padding */
         .dropdown-trigger {
              padding: 12px 16px 12px 24px;
         }
    }

    @media screen and (max-width: 480px) {
        main { padding: 32px 16px; }
        #hero-content { margin-bottom: 32px; }
        #button-container {
            flex-direction: column;
            align-items: center; /* Center items when stacked */
            gap: 16px;
            width: 90%;
            max-width: 320px;
        }
        /* Make dropdown container and buttons full width when stacked */
        .dropdown-container, .button {
             width: 100%;
             max-width: none;
         }
        .button, .dropdown-trigger {
             padding: 14px 20px;
         }
        .dropdown-menu {
            /* Ensure dropdown doesn't overflow screen */
            width: 100%;
            left: 0;
            top: calc(100% + 4px); /* Slightly smaller gap */
        }
    }

    /* --- Dark Mode Adjustments --- */
    @media (prefers-color-scheme: dark) {
        #container { color: var(--text-dark); }
        #hero-content h1 {
            color: var(--text-dark);
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        }
        #hero-content .description { color: var(--text-dark-secondary); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); }
        #hero-content .description a { color: var(--link-dark); }
        #hero-content .description a:hover { color: var(--link-dark-hover); border-bottom-color: var(--link-dark-hover); }

        .button {
            /* Button text is already light, gradient remains */
             box-shadow: 0 2px 4px var(--shadow-color-dark), 0 4px 6px var(--shadow-color-dark);
        }
         .button:hover { box-shadow: 0 4px 8px var(--shadow-color-dark), 0 6px 10px var(--shadow-color-dark); }
        .button:active { box-shadow: 0 1px 2px var(--shadow-color-dark); }

        /* Dropdown Dark Mode */
        .dropdown-menu {
             background-color: var(--bg-dropdown-dark);
             box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Darker shadow for dropdown */
        }
        .dropdown-item {
            color: var(--text-dark-secondary);
        }
        .dropdown-item:hover {
            background-color: var(--hover-dropdown-dark);
            color: var(--text-dark); /* Use main dark text color on hover */
        }
    }

</style>
````

## File: src/layouts/Layout.astro
````
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<!-- Updated Title -->
		<title>Tello SDK Applications</title> 
	</head>
	<body>
		<slot />
	</body>
</html>

<style is:global> /* Use is:global for html, body styles */
	html,
	body {
		margin: 0;
		padding: 0; /* Explicitly set padding to 0 */
		width: 100%;
		height: 100%;
		box-sizing: border-box; /* Include padding and border in element's total width and height */
	}
	*, *:before, *:after {
  		box-sizing: inherit; /* Inherit box-sizing for all elements */
	}

	/* Optional: Add a base font-size or other global resets if needed */
	/* html {
		font-size: 16px;
		line-height: 1.5;
	} */
</style>
````

## File: src/pages/index.astro
````
---
import Welcome from '../components/Welcome.astro';
import Layout from '../layouts/Layout.astro';

// Welcome to Astro! Wondering what to do next? Check out the Astro documentation at https://docs.astro.build
// Don't want to use any of this? Delete everything in this file, the `assets`, `components`, and `layouts` directories, and start fresh.
---

<Layout>
	<Welcome />
</Layout>
````

## File: tsconfig.json
````json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
````
