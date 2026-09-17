# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assertions.spec.ts >> DemoQA Practice Form Checkbox Assertions
- Location: tests\assertions.spec.ts:76:5

# Error details

```
Test timeout of 3000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]:
        - generic [ref=e25] [cursor=pointer]: Forms
        - list [ref=e38]:
          - listitem [ref=e39] [cursor=pointer]:
            - link "Practice Form" [ref=e40]:
              - /url: /automation-practice-form
      - generic [ref=e43]: Alerts, Frame & Windows
      - generic [ref=e55]: Widgets
      - generic [ref=e68]: Interactions
      - generic [ref=e80]: Book Store Application
    - generic [ref=e93]:
      - heading "Practice Form" [level=1] [ref=e94]
      - heading "Student Registration Form" [level=5] [ref=e95]
      - generic [ref=e96]:
        - generic [ref=e97]:
          - generic [ref=e98]: Name
          - textbox "First Name" [ref=e101]
          - textbox "Last Name" [ref=e103]
        - generic [ref=e104]:
          - generic [ref=e105]: Email
          - textbox "name@example.com" [ref=e108]
        - generic [ref=e109]:
          - generic [ref=e110]: Gender
          - generic [ref=e111]:
            - generic [ref=e112]:
              - radio "Male" [ref=e113]
              - generic [ref=e114]: Male
            - generic [ref=e115]:
              - radio "Female" [ref=e116]
              - generic [ref=e117]: Female
            - generic [ref=e118]:
              - radio "Other" [ref=e119]
              - generic [ref=e120]: Other
        - generic [ref=e121]:
          - generic [ref=e122]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=e125]
        - generic [ref=e126]:
          - generic [ref=e127]: Date of Birth
          - textbox [ref=e132]: 17 Sep 2026
        - generic [ref=e133]:
          - generic [ref=e134]: Subjects
          - generic [ref=e137]:
            - log [ref=e139]
            - combobox [ref=e143]
        - generic [ref=e146]:
          - generic [ref=e147]: Hobbies
          - generic [ref=e149]:
            - generic [ref=e150]:
              - checkbox "Sports" [checked] [ref=e151]
              - generic [ref=e152]: Sports
            - generic [ref=e153]:
              - checkbox "Reading" [checked] [active] [ref=e154]
              - generic [ref=e155]: Reading
            - generic [ref=e156]:
              - checkbox "Music" [ref=e157]
              - generic [ref=e158]: Music
        - generic [ref=e159]:
          - generic [ref=e160]: Picture
          - button "Choose File" [ref=e163] [cursor=pointer]
        - generic [ref=e164]:
          - generic [ref=e165]: Current Address
          - textbox "Current Address" [ref=e168]
        - generic [ref=e169]:
          - generic [ref=e170]: State and City
          - generic [ref=e173]:
            - log [ref=e175]
            - generic [ref=e177]:
              - generic [ref=e178]: Select State
              - combobox [ref=e180]
          - generic [ref=e186]:
            - generic:
              - log
              - generic: Select City
        - button "Submit" [ref=e189] [cursor=pointer]
  - contentinfo [ref=e196]:
    - generic [ref=e197]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```