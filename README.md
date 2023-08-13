
# README Generator
### License Badge
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

As a web developer or any programmer of the matter, including a concise, well-structured README file at the base of your repository is necessary in conveying the purpose and utility of your application. While writing the README might be a straight-forward process, setting the structure and readability of the file can take up a lot of your time!

To solve this, I have created an application that forms a README.md file based on user input, which automatically structures your page so you can get to writing without having to worry about the layout. It includes quick, concise questions that gives the user the freedom to answer however they want, as well as unique customization options like file accessibility and creating new lines.

## Table of Contents

- [Title](#readme-generator)
- [License Badge](#license-badge)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contribution](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

Either: 

1. Clone the repo and open in VS Studio 

2. Watch the video tutorial

## Usage

When executing the command 'node ./index.js', users are presented with an instructional message and a prompt. The purpose of the instruction is to guide users in keeping the readability of a README document by suggesting line breaks. To achieve this, users are recommended to use the '|' character just before the initial character of a new line, which will shift the text down two lines.

Upon responding to the initial inquiry, 'Enter your project title', users are prompted with questions pertaining to various aspects of their project, including project description, installation instructions, and application usage.

Once the user provides input for the usage section, a confirmation prompt is given, inquiring whether any accompanying files should be included. Answering 'no' sends the user to the subsequent prompt, whereas selecting 'yes' leads to an additional requirement: the user must supply both the alt attribute for the file and its location. It's suggested all example files be saved in the 'readmefiles' directory within the 'develop' directory, so their locations can be easily referenced to the current directory, such as './readmefiles/example.png'. Additionally, users can input file links, like videos and image addresses by copying and pasting them.

When the user completes the entry of supporting files and inputs 'no' on the confirmation prompt, they are asked to answer the remaining questions, encompassing features, contribution guidelines, tests, and questions.

Upon reaching the license query after questions, users are presented with a selection of GitHub licenses. They can navigate through the options using the up and down arrow keys and select their choice by pressing the enter key. Following the selection, the README file generates, and incorporates the prompt values in their corresponding sections. Furthermore, the README includes a license badge at the top of the document and places the terms of the selected license agreement at the bottom.

![Functionality](https://watch.screencastify.com/v/cbg4Rm523nHoGHqvTFiY)

## Features

- Command line interface that accepts user input.
- Prompts information about application repository.
- Values from respective prompts are placed in their corresponding README section.
- Usage files can be added using alt attribute and a file path/link.
- Sets user GitHub account and email as interactable links.
- Selecting a license will generate the respective badge at the top of the file, as well as agreement terms at the bottom.
- Clicking on Table of Contents links will send users to the location clicked.
- Dynamic line break feature.
- Generates a README.md file.

## Contributing

N/A

## Tests

N/A

## Questions

N/A

GitHub user:
- jujusoi, https://www.github.com/jujusoi/

If further inquiry is necessary, reach out to me through my email address: 
- jalxmcdonald@hotmail.com

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  