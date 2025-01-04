# Procedures for creating and maintaining the language pages

Note: "speaking" includes signing.

Translations are best-effort. If it's too hard to translate, leave it like "[? Central government]" (not marked as <code>lang="en"</code>) until a translator can handle it.

## Choices for each test page

* Language — Something that speakers or linguists identify as a distinct language. These instructions call it the "target language."
* Country — A country associated with the target language.
* Locale — The locale could be the same as the country. Or it could be a region that's associated with the target language within the country. (Example: Some people speak Lower Sorbian in the city of [Cottbus, Germany](lang/dsb.html).)
* Script (optional) — An alternate writing system.
* Language code: Usually just the two- or three-character IANA language code. We don't add the country, locale, or script unless it's important to distinguish the form of the target language.

## Adding a page

* Copy a stub language page the template HTML. Name the file with the language code.
* Add it to the [list of language pages](lang-pages.md).
* Copy a stub results page from the template HTML. Name the file with the language code.
* Add it to the [list of test results](research/lang-results.md).
* In the individual results page, fill the "Creating the test page" section as you go.

## Navigation

* Copy the flag icon character from [Emoji flags (Wikipedia)](https://en.wikipedia.org/wiki/Regional_indicator_symbol#Emoji_flag_sequences).
* Alphabetize it by flag code, link language, and URL language — in other words, alphabetize the lines of HTML code in the list. Mainly this groups languages by country.

## Table of opening hours

* Confirm the week starts on Monday in this country. Example: [Calendar for Year 2024 (Antigua and Barbuda) - TimeAndDate](https://www.timeanddate.com/calendar/?year=2024&country=221)
* Put the later hours on a random day of the week. (So we can ask participants a usability question about the table: When is the library open later?)
* Localize the time range with the [Date and Time Localizer](utility/date-time-localizer.html) tool. But don't trust the dash character: see <a href="https://github.com/ThePacielloGroup/babel/issues/38">issue 38</a>.

## List of links: Web pages in the target language

Wikipedia:

1. Find the article in a dominant language.
1. Use the language selector to change to the target language.
1. Use the name of "Wikipedia" and the article title as Wikipedia spells them.

Include a government webpage in the target language. In order of preference:

1. A central government webpage
1. A local government webpage
1. "🙅 Government" (translated into the target language): this indicates that we couldn't find any suitable page 

Google Translate:

1. Try https://translate.google.com/?hl=xx substituting the language code.
1. For the link text, use Google's own localized name for the Google Translate page.
1. If Google supports translation in the target language, but the Google Translate page itself is not localized in the target language, then link to the Google Translate page localized in the national language for the country. Note the national language as "([LANGUAGE], <code>[LANGUAGE CODE]</code>)" after the link.
1. "🙅 Google Translate": this indicates that Google does not support translation in the target language. In this context, do not translate this phrase and do not give it a <code>lang</code> attribute.

WCAG:

1. Find a translation on the [WCAG 2 Translations](https://www.w3.org/WAI/standards-guidelines/wcag/translations/) page. Note the WCAG version number (2.0, 2.1, 2.2).
1. If the latest version of WCAG does not have an "authorized" translation, continue with the following steps.
1. Translate the words "Web Content Accessibility Guidelines" into the target language, and search for this string. If an unofficial translation exists, link to it.
1. If no translation was found of the latest version, list it with "🙅 WCAG 2.2".

## List of links: Web pages in another language

Purposes of content in other languages:

* Provide realistic examples for "language of parts" testing
* Give a sense of the multilingual character of the locale
* Give a sense of the availability of relevant online content

Mention at least one government webpage in another language. In order of preference:

1. A central government webpage in a language that's more common for this country
1. A central government webpage in a language that's less common for this country
1. A local government webpage in a language that's less common for this country
1. "🙅 Government ([LANGUAGE], <code>[LANGUAGE CODE]</code>)": one or two instances. This indicates that we couldn't find any suitable page in the other language(s). Translate "Government" into the other language(s).

WCAG:

* If there is a language that's more common for this country:
    * If it has WCAG 2.2, link to it; otherwise "🙅 WCAG 2.2 ([LANGUAGE], <code>[LANGUAGE CODE]</code>)".
    * If it has an older version of WCAG, link to it; followed by "🙅 WCAG 2.2 ([LANGUAGE], <code>[LANGUAGE CODE]</code>)".
* Finally (unless the English link is already included above), always include the English link. Even if WCAG 2.2 is available in the country's languages, this extra link is still useful just to test the English link phrase.

## Universal Declaration of Human Rights (UDHR)

1. In the [UDHR search page](https://www.ohchr.org/en/search?f%5B0%5D=event_type_taxonomy_term_name%3AUniversal%20Declaration%20of%20Human%20Rights), under "UDHR Translations" enter the name of the language.
1. If necessary, use Wikipedia articles to find synonyms and endonyms for the name of the language, then search again in UDHR.
1. For the title of the document, the "Article 2" section heading, and the two paragraphs of Article 2, use the UN text.

### UDHR in other language(s)

* UDHR in another language or two for this country
* If there is a relevant language for this country but it's not available at UN, then "🙅"
* UDHR in French
