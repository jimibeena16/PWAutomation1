# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frames.spec.ts >> Get all frames
- Location: tests\frames.spec.ts:42:5

# Error details

```
Test timeout of 3000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link:
      - /url: https://demoqa.com
  - generic [ref=e6]:
    - generic [ref=e9]:
      - generic [ref=e10]: Elements
      - generic [ref=e22]: Forms
      - generic [ref=e35]:
        - generic [ref=e36] [cursor=pointer]: Alerts, Frame & Windows
        - list [ref=e48]:
          - listitem [ref=e49] [cursor=pointer]:
            - link "Browser Windows" [ref=e50]:
              - /url: /browser-windows
          - listitem [ref=e53] [cursor=pointer]:
            - link "Alerts" [ref=e54]:
              - /url: /alerts
          - listitem [ref=e57] [cursor=pointer]:
            - link "Frames" [ref=e58]:
              - /url: /frames
          - listitem [ref=e61] [cursor=pointer]:
            - link "Nested Frames" [ref=e62]:
              - /url: /nestedframes
          - listitem [ref=e65] [cursor=pointer]:
            - link "Modal Dialogs" [ref=e66]:
              - /url: /modal-dialogs
      - generic [ref=e69]: Widgets
      - generic [ref=e82]: Interactions
      - generic [ref=e94]: Book Store Application
    - generic [ref=e107]:
      - heading "Frames" [level=1] [ref=e108]
      - generic [ref=e109]: Sample Iframe page There are 2 Iframes in this page. Use browser inspecter or firebug to check out the HTML source. In total you can switch between the parent frame, which is this window, and the two frames below
      - iframe [ref=e111]:
        - heading "This is a sample page" [level=1] [ref=f1e2]
      - iframe [ref=e113]:
        - heading "This is a sample page" [level=1] [ref=f2e2]
  - contentinfo [ref=e120]:
    - generic [ref=e121]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```