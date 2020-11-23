# Merge Confidence

Merge Confidence identifies and flags undeclared breaking releases based on analysis of test and release adoption data across WhiteSource Renovate’s early-adopting user base.
The new feature was created to help users avoid the pain of un-mergeable Pull Requests or worse -- a broken dependency in production.

## Confidence Levels and their meaning

Merge Confidence has four possible values:

- **Low**: If an update is classified as having low merge confidence, it means we think it contains breaking changes. Often this is because it's a Major version update so this is intention, but sometimes it's unintentional or undeclared.

- **Neutral**: If we do not have enough data about an update, or the data is not conclusive about whether the update should be classifed as High or Low, then we classify it as Neutral.

- **High**: Updates are classified as High Confidence once we believe that their combination of Age, Adoption and Test Compatibility means that there's a very low chance that there are breaking changes.

- **Very High**: This is reserved for updates which are months old and have either strong adoption or show very high test compatibility scores.

## Pull Request Badges

Merge Confidence is currently available in the form of Pull Request badges.

The badges available are:

- **Age**: How old the release is
- **Adoption**: The % of Renovate's user base which is using this library
- **Passing**: The % of updates which had successful test results
- **Confidence**: The confidence level for this update

## How Does It Work?

WhiteSource's hosted Renovate App has enabled a diverse user base across github.com and gitlab.com to keep dependencies up-to-date since 2017, and generated millions of Pull Requests in the process.
We found that by aggregating and analyzing metrics we already had, such as release age, release adoption, and Pull Request test results, we can accurately identify releases of open source packages that show signs of having undeclared breaking changes.

The _algorithm_ for determining values is private and is not something we plan to share.
Similar to a search engine's algorithm, we plan to tweak and enhance it over time, like adding historical data to determine a baseline confidence level for packages.

We plan to expose much more of the _data_ via a companion website, such as number of users of a package and popular repositories which may have already updated to the version in question.

## Supported Platforms and Languages, Roadmap

Merge Confidence badges for Pull Requests are available in beta on any supported Renovate platform today, including WhiteSource Remediate.

Data is available for npm packages only for now, but it is planned to support them for other languages soon.

High-level information on planned enhancements is available in the [Merge Confidence Roadmap Project](https://github.com/whitesource/merge-confidence/projects/1) on GitHub.

## Enabling and Disabling

Merge Confidence badges are enabled automatically for anyone using the WhiteSource Renovate App.
For Renovate users of other types, you can enable Merge Confidence badges by adding `“extends”: [“github>whitesource/merge-confidence:beta”]` to your Renovate config.

If you’d prefer to disable these badges in the app, add `“ignorePresets”: [“github>whitesource/merge-confidence:beta”]` to your config instead.

## Miscellaneous Clarifications

npm packages are never classified as High Confidence until they are at least 3 days old.
This is because npm packages less than 72 hours old can be [unpublished](https://docs.npmjs.com/unpublishing-packages-from-the-registry), which could result in a service impact if you have already updated to it.

Percentage values for Adoption and Passing are not _raw_ percentages and instead are weighted towards Organizations, private repositories, and projects with high test reliability.

## Questions and Feedback

You are invited to [create an Issue](https://github.com/whitesource/merge-confidence/issues/new) if you have anything you'd like to discuss.
