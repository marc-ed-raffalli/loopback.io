## Fork from strongloop/loopback.io

 The purpose of this branch is to work on [Migrate Conflunce content to markdown #29](https://github.com/strongloop/loopback.io/issues/29).

## Original content

 As the original content is 20Mb, it was not added to this repo. It is available as a zip file in the
 [git issue ticket](https://github.com/strongloop/loopback.io/issues/29).

 You should download it separately. The converter takes as param the source and the destination directories.

## Converter

 Written using `Node v4.4.3`, it performs the conversion as a flow of tasks.

### How to run the script

```
cd script/export
npm install
node . {PATH_TO_ORIGINAL_CONTENT} {OUTPUT_PATH}
```

### Flow based converter

 As many people offered their help on the forum topic, the converter should enable parallel team work.

 The approach taken here splits each conversion task to a separate flow step.

#### Global flow

 The steps in `script/export/global-flow` handle the global tasks in this sequence:

 * Read the page hierarchy, provides:
    * List of files to convert
    * Hierarchical page structure
 * Calls the conversion flow on each page file (see below)
 * *Steps to be contributed*
    * Update the links in each pages
    * Writes the side menu out of the page hierarchy with the page updates e.g. converted page link

#### Content Conversion flow

 Located under `script/export/content-conversion-flow`.
 Each step performs a task on the content and calls the next one.

 This flow is executed sequentially **once per file**:

 * Reads the original content
 * *Steps to be contributed*, see conversion rules
    * File name conversion
    * HTML to MD
    * Confluence Macros to MD/Jekyll template
    * ... (see rules for additional conversion tasks)
    * Write the converted content

## Useful links
* [Migrate Conflunce content to markdown #29](https://github.com/strongloop/loopback.io/issues/29)
* [Forum topic](https://groups.google.com/forum/#!topic/loopbackjs/SCx58Gmv-y4)
* [Conversion-rules](https://github.com/strongloop/loopback.io/wiki/Conversion-rules)
