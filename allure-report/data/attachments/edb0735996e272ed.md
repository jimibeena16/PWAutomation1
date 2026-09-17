# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: radio.spec.ts >> Checkbox Example
- Location: tests\radio.spec.ts:11:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//span[@class="rc-tree-title"]')
Expected substring: "Downloads"
Error: strict mode violation: locator('//span[@class="rc-tree-title"]') resolved to 4 elements:
    1) <span class="rc-tree-title">Home</span> aka getByText('Home')
    2) <span class="rc-tree-title">Desktop</span> aka getByText('Desktop')
    3) <span class="rc-tree-title">Documents</span> aka getByText('Documents')
    4) <span class="rc-tree-title">Downloads</span> aka getByText('Downloads')

Call log:
  - Expect "toContainText" locator('//span[@class="rc-tree-title"]') with timeout 5000ms
  - waiting for locator('//span[@class="rc-tree-title"]')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e13] [cursor=pointer]: Elements
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
      - generic [ref=e62]: Forms
      - generic [ref=e75]: Alerts, Frame & Windows
      - generic [ref=e87]: Widgets
      - generic [ref=e100]: Interactions
      - generic [ref=e112]: Book Store Application
    - generic [ref=e124]:
      - heading "Check Box" [level=1] [ref=e125]
      - generic [ref=e127]:
        - generic:
          - textbox "for screen reader"
        - tree [ref=e128]:
          - generic [ref=e131]:
            - treeitem "Select Home Home" [expanded] [ref=e132]:
              - generic [ref=e133] [cursor=pointer]
              - checkbox "Select Home" [ref=e134] [cursor=pointer]
              - generic "Home" [ref=e135] [cursor=pointer]
            - treeitem "Select Desktop Desktop" [ref=e138]:
              - generic [ref=e139] [cursor=pointer]
              - checkbox "Select Desktop" [ref=e140] [cursor=pointer]
              - generic "Desktop" [ref=e141] [cursor=pointer]
            - treeitem "Select Documents Documents" [ref=e144]:
              - generic [ref=e145] [cursor=pointer]
              - checkbox "Select Documents" [ref=e146] [cursor=pointer]
              - generic "Documents" [ref=e147] [cursor=pointer]
            - treeitem "Select Downloads Downloads" [ref=e150]:
              - generic [ref=e151] [cursor=pointer]
              - checkbox "Select Downloads" [ref=e152] [cursor=pointer]
              - generic "Downloads" [ref=e153] [cursor=pointer]
      - iframe [ref=e159]:
        - generic [ref=f4e1]:
          - generic [ref=f4e5]:
            - generic [ref=f4e6]:
              - generic "Contiem" [ref=f4e7]:
                - link "Automates, manages, publishes, and delivers" [ref=f4e9] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C0V-FTVaiasC6FfKGjuMP-IbuiAvjhKC4iQHRqd6lnBa3_PP9CBABIMb71nlg5aLmg7gOoAHU8vb9A8gBAeACAKgDAcgDCqoEkgJP0PPs7FlKg62M6g5tC_kuoTwuWi78fsAWIWJBxJdq_KR70nrM5DM-4_Kj6HOztaVhJsnRLajs6IJmn3BY-X1OGR-MGqE4OZB33Nmgci7kswNJKvYuPEu0A7xaabS1zLw_FTyG-1fuVuQkNQQYeiFxASFkTILKZBzAyjcT7oNIAmWL_-DrSl9RV7bq7yDcKQZAtbbaVCIs4bbx8jJJxRsWxQtpFZSUow24z5ugE-e_L5WAENFZw4iOtcXA_nK6QTPHdZwSGbOqnuifKq6kaRhpbFrx-AH1qzDCj7seaYKx__2c4uqkWT2UfvCiSH2kTbl5rgg25tRn85yz4XcrKHaObN1Sw6whPh7Y1Ai2P7uuPJApwATit5Xg5gXgBAGIBfaU7ZlaoAZmgAeUjYkCqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggyCIBhEAEYHTIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMjT9Iq545YDYAHyCBthZHgtc3Vic3luLTM1MjA2MTczNDE2NjU1OTKxCZtf80WDUFPLgAoDmAsByAsBogwMKgoKCI7fsQKV4rECqg0CSU7IDQHiDRMIw7b1irnjlgMVcoNjBh14gxux6g0TCMHf9oq545YDFXKDYwYdeIMbsfANAogO____________AdgTDYgUAtAVAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAABgjRtBEgo2MTY4NTc2NTA1GAGyGAkSArhQGGYiAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIgJX3irnjlgMVcoNjBh14gxuxEAEYASAAEgLhG_D_BwE&num=1&cid=CAQShwIAQM4h3PqJ7wg3dmT8bAYZ3ZMswzoIdudd3dWxDleVrqKdJxRyvVqtzC7ioD9T_iHM4j8uFL_uRn2qN4SpK0_hJ6xFqtkfP_Zm9gG8oD3cok-gwYRzeVlZdo265tMkUOQdY09KFkoZuJ9z9-bo6JjQvD4-XFYRtaQb8NOpu4qBJjcvftPGR-WTfT2aNHlMYfz80ABk4IC4-h7yqMXHhNsIg-pf8X0X976yCFjZqxcbcPg043ALb9vQtLL4XAwBu7RanNgeB8DU8zm7XinKOmcR558qoI0_nrbnujGy8DcMT-e9iZ2qDQx5vimkYiIYYz5yhJIAh_z-8EqgcgyUQeSCBO3BNWFD_RgB&sig=AOD64_0KJccFKEDmEm821SpoVpqQl_qywg&client=ca-pub-4573231550355221&rf=4&nb=0&adurl=https://contiem.com/software/rsuite-ccms/%3Futm_term%3D%26utm_campaign%3DSOFTWARE%2B-%2BCCMS%2B%2526%2BContent%2BManagement%2B-%2BSearch%2B-%2B2026%26utm_source%3Dadwords%26utm_medium%3Dppc%26utm_id%3D24213408374%26hsa_acc%3D9074065578%26hsa_cam%3D24213408374%26hsa_grp%3D199380786146%26hsa_ad%3D823297325209%26hsa_src%3Dd%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D24213408374%26gclid%3DEAIaIQobChMIgJX3irnjlgMVcoNjBh14gxuxEAEYASAAEgLhG_D_BwE
              - generic "Contiem" [ref=f4e10]:
                - link "RSuite CCMS – Enterprise Content Management" [ref=f4e11] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C0V-FTVaiasC6FfKGjuMP-IbuiAvjhKC4iQHRqd6lnBa3_PP9CBABIMb71nlg5aLmg7gOoAHU8vb9A8gBAeACAKgDAcgDCqoEkgJP0PPs7FlKg62M6g5tC_kuoTwuWi78fsAWIWJBxJdq_KR70nrM5DM-4_Kj6HOztaVhJsnRLajs6IJmn3BY-X1OGR-MGqE4OZB33Nmgci7kswNJKvYuPEu0A7xaabS1zLw_FTyG-1fuVuQkNQQYeiFxASFkTILKZBzAyjcT7oNIAmWL_-DrSl9RV7bq7yDcKQZAtbbaVCIs4bbx8jJJxRsWxQtpFZSUow24z5ugE-e_L5WAENFZw4iOtcXA_nK6QTPHdZwSGbOqnuifKq6kaRhpbFrx-AH1qzDCj7seaYKx__2c4uqkWT2UfvCiSH2kTbl5rgg25tRn85yz4XcrKHaObN1Sw6whPh7Y1Ai2P7uuPJApwATit5Xg5gXgBAGIBfaU7ZlaoAZmgAeUjYkCqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggyCIBhEAEYHTIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMjT9Iq545YDYAHyCBthZHgtc3Vic3luLTM1MjA2MTczNDE2NjU1OTKxCZtf80WDUFPLgAoDmAsByAsBogwMKgoKCI7fsQKV4rECqg0CSU7IDQHiDRMIw7b1irnjlgMVcoNjBh14gxux6g0TCMHf9oq545YDFXKDYwYdeIMbsfANAogO____________AdgTDYgUAtAVAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAABgjRtBEgo2MTY4NTc2NTA1GAGyGAkSArhQGGYiAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIgJX3irnjlgMVcoNjBh14gxuxEAEYASAAEgLhG_D_BwE&num=1&cid=CAQShwIAQM4h3PqJ7wg3dmT8bAYZ3ZMswzoIdudd3dWxDleVrqKdJxRyvVqtzC7ioD9T_iHM4j8uFL_uRn2qN4SpK0_hJ6xFqtkfP_Zm9gG8oD3cok-gwYRzeVlZdo265tMkUOQdY09KFkoZuJ9z9-bo6JjQvD4-XFYRtaQb8NOpu4qBJjcvftPGR-WTfT2aNHlMYfz80ABk4IC4-h7yqMXHhNsIg-pf8X0X976yCFjZqxcbcPg043ALb9vQtLL4XAwBu7RanNgeB8DU8zm7XinKOmcR558qoI0_nrbnujGy8DcMT-e9iZ2qDQx5vimkYiIYYz5yhJIAh_z-8EqgcgyUQeSCBO3BNWFD_RgB&sig=AOD64_0KJccFKEDmEm821SpoVpqQl_qywg&client=ca-pub-4573231550355221&rf=4&nb=0&adurl=https://contiem.com/software/rsuite-ccms/%3Futm_term%3D%26utm_campaign%3DSOFTWARE%2B-%2BCCMS%2B%2526%2BContent%2BManagement%2B-%2BSearch%2B-%2B2026%26utm_source%3Dadwords%26utm_medium%3Dppc%26utm_id%3D24213408374%26hsa_acc%3D9074065578%26hsa_cam%3D24213408374%26hsa_grp%3D199380786146%26hsa_ad%3D823297325209%26hsa_src%3Dd%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D24213408374%26gclid%3DEAIaIQobChMIgJX3irnjlgMVcoNjBh14gxuxEAEYASAAEgLhG_D_BwE
              - link "Congility is a highly customizable, modular content delivery platform." [ref=f4e13] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C0V-FTVaiasC6FfKGjuMP-IbuiAvjhKC4iQHRqd6lnBa3_PP9CBABIMb71nlg5aLmg7gOoAHU8vb9A8gBAeACAKgDAcgDCqoEkgJP0PPs7FlKg62M6g5tC_kuoTwuWi78fsAWIWJBxJdq_KR70nrM5DM-4_Kj6HOztaVhJsnRLajs6IJmn3BY-X1OGR-MGqE4OZB33Nmgci7kswNJKvYuPEu0A7xaabS1zLw_FTyG-1fuVuQkNQQYeiFxASFkTILKZBzAyjcT7oNIAmWL_-DrSl9RV7bq7yDcKQZAtbbaVCIs4bbx8jJJxRsWxQtpFZSUow24z5ugE-e_L5WAENFZw4iOtcXA_nK6QTPHdZwSGbOqnuifKq6kaRhpbFrx-AH1qzDCj7seaYKx__2c4uqkWT2UfvCiSH2kTbl5rgg25tRn85yz4XcrKHaObN1Sw6whPh7Y1Ai2P7uuPJApwATit5Xg5gXgBAGIBfaU7ZlaoAZmgAeUjYkCqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggyCIBhEAEYHTIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMjT9Iq545YDYAHyCBthZHgtc3Vic3luLTM1MjA2MTczNDE2NjU1OTKxCZtf80WDUFPLgAoDmAsByAsBogwMKgoKCI7fsQKV4rECqg0CSU7IDQHiDRMIw7b1irnjlgMVcoNjBh14gxux6g0TCMHf9oq545YDFXKDYwYdeIMbsfANAogO____________AdgTDYgUAtAVAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAABgjRtBEgo2MTY4NTc2NTA1GAGyGAkSArhQGGYiAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIgJX3irnjlgMVcoNjBh14gxuxEAEYASAAEgLhG_D_BwE&num=1&cid=CAQShwIAQM4h3PqJ7wg3dmT8bAYZ3ZMswzoIdudd3dWxDleVrqKdJxRyvVqtzC7ioD9T_iHM4j8uFL_uRn2qN4SpK0_hJ6xFqtkfP_Zm9gG8oD3cok-gwYRzeVlZdo265tMkUOQdY09KFkoZuJ9z9-bo6JjQvD4-XFYRtaQb8NOpu4qBJjcvftPGR-WTfT2aNHlMYfz80ABk4IC4-h7yqMXHhNsIg-pf8X0X976yCFjZqxcbcPg043ALb9vQtLL4XAwBu7RanNgeB8DU8zm7XinKOmcR558qoI0_nrbnujGy8DcMT-e9iZ2qDQx5vimkYiIYYz5yhJIAh_z-8EqgcgyUQeSCBO3BNWFD_RgB&sig=AOD64_0KJccFKEDmEm821SpoVpqQl_qywg&client=ca-pub-4573231550355221&rf=4&nb=7&adurl=https://contiem.com/software/rsuite-ccms/%3Futm_term%3D%26utm_campaign%3DSOFTWARE%2B-%2BCCMS%2B%2526%2BContent%2BManagement%2B-%2BSearch%2B-%2B2026%26utm_source%3Dadwords%26utm_medium%3Dppc%26utm_id%3D24213408374%26hsa_acc%3D9074065578%26hsa_cam%3D24213408374%26hsa_grp%3D199380786146%26hsa_ad%3D823297325209%26hsa_src%3Dd%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D24213408374%26gclid%3DEAIaIQobChMIgJX3irnjlgMVcoNjBh14gxuxEAEYASAAEgLhG_D_BwE
            - generic [ref=f4e16]:
              - generic "Contiem" [ref=f4e18]:
                - link "Contiem" [ref=f4e19] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C0V-FTVaiasC6FfKGjuMP-IbuiAvjhKC4iQHRqd6lnBa3_PP9CBABIMb71nlg5aLmg7gOoAHU8vb9A8gBAeACAKgDAcgDCqoEkgJP0PPs7FlKg62M6g5tC_kuoTwuWi78fsAWIWJBxJdq_KR70nrM5DM-4_Kj6HOztaVhJsnRLajs6IJmn3BY-X1OGR-MGqE4OZB33Nmgci7kswNJKvYuPEu0A7xaabS1zLw_FTyG-1fuVuQkNQQYeiFxASFkTILKZBzAyjcT7oNIAmWL_-DrSl9RV7bq7yDcKQZAtbbaVCIs4bbx8jJJxRsWxQtpFZSUow24z5ugE-e_L5WAENFZw4iOtcXA_nK6QTPHdZwSGbOqnuifKq6kaRhpbFrx-AH1qzDCj7seaYKx__2c4uqkWT2UfvCiSH2kTbl5rgg25tRn85yz4XcrKHaObN1Sw6whPh7Y1Ai2P7uuPJApwATit5Xg5gXgBAGIBfaU7ZlaoAZmgAeUjYkCqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggyCIBhEAEYHTIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMjT9Iq545YDYAHyCBthZHgtc3Vic3luLTM1MjA2MTczNDE2NjU1OTKxCZtf80WDUFPLgAoDmAsByAsBogwMKgoKCI7fsQKV4rECqg0CSU7IDQHiDRMIw7b1irnjlgMVcoNjBh14gxux6g0TCMHf9oq545YDFXKDYwYdeIMbsfANAogO____________AdgTDYgUAtAVAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAABgjRtBEgo2MTY4NTc2NTA1GAGyGAkSArhQGGYiAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIgJX3irnjlgMVcoNjBh14gxuxEAEYASAAEgLhG_D_BwE&num=1&cid=CAQShwIAQM4h3PqJ7wg3dmT8bAYZ3ZMswzoIdudd3dWxDleVrqKdJxRyvVqtzC7ioD9T_iHM4j8uFL_uRn2qN4SpK0_hJ6xFqtkfP_Zm9gG8oD3cok-gwYRzeVlZdo265tMkUOQdY09KFkoZuJ9z9-bo6JjQvD4-XFYRtaQb8NOpu4qBJjcvftPGR-WTfT2aNHlMYfz80ABk4IC4-h7yqMXHhNsIg-pf8X0X976yCFjZqxcbcPg043ALb9vQtLL4XAwBu7RanNgeB8DU8zm7XinKOmcR558qoI0_nrbnujGy8DcMT-e9iZ2qDQx5vimkYiIYYz5yhJIAh_z-8EqgcgyUQeSCBO3BNWFD_RgB&sig=AOD64_0KJccFKEDmEm821SpoVpqQl_qywg&client=ca-pub-4573231550355221&rf=4&nb=1&adurl=https://contiem.com/software/rsuite-ccms/%3Futm_term%3D%26utm_campaign%3DSOFTWARE%2B-%2BCCMS%2B%2526%2BContent%2BManagement%2B-%2BSearch%2B-%2B2026%26utm_source%3Dadwords%26utm_medium%3Dppc%26utm_id%3D24213408374%26hsa_acc%3D9074065578%26hsa_cam%3D24213408374%26hsa_grp%3D199380786146%26hsa_ad%3D823297325209%26hsa_src%3Dd%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D24213408374%26gclid%3DEAIaIQobChMIgJX3irnjlgMVcoNjBh14gxuxEAEYASAAEgLhG_D_BwE
              - link "OPEN" [ref=f4e22] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C0V-FTVaiasC6FfKGjuMP-IbuiAvjhKC4iQHRqd6lnBa3_PP9CBABIMb71nlg5aLmg7gOoAHU8vb9A8gBAeACAKgDAcgDCqoEkgJP0PPs7FlKg62M6g5tC_kuoTwuWi78fsAWIWJBxJdq_KR70nrM5DM-4_Kj6HOztaVhJsnRLajs6IJmn3BY-X1OGR-MGqE4OZB33Nmgci7kswNJKvYuPEu0A7xaabS1zLw_FTyG-1fuVuQkNQQYeiFxASFkTILKZBzAyjcT7oNIAmWL_-DrSl9RV7bq7yDcKQZAtbbaVCIs4bbx8jJJxRsWxQtpFZSUow24z5ugE-e_L5WAENFZw4iOtcXA_nK6QTPHdZwSGbOqnuifKq6kaRhpbFrx-AH1qzDCj7seaYKx__2c4uqkWT2UfvCiSH2kTbl5rgg25tRn85yz4XcrKHaObN1Sw6whPh7Y1Ai2P7uuPJApwATit5Xg5gXgBAGIBfaU7ZlaoAZmgAeUjYkCqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggyCIBhEAEYHTIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMjT9Iq545YDYAHyCBthZHgtc3Vic3luLTM1MjA2MTczNDE2NjU1OTKxCZtf80WDUFPLgAoDmAsByAsBogwMKgoKCI7fsQKV4rECqg0CSU7IDQHiDRMIw7b1irnjlgMVcoNjBh14gxux6g0TCMHf9oq545YDFXKDYwYdeIMbsfANAogO____________AdgTDYgUAtAVAcoWAgoA-BYBgBcBshcQGAEqCjYxNjg1NzY1MDVQBroXAjgBqhgXCQAAAABgjRtBEgo2MTY4NTc2NTA1GAGyGAkSArhQGGYiAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIgJX3irnjlgMVcoNjBh14gxuxEAEYASAAEgLhG_D_BwE&num=1&cid=CAQShwIAQM4h3PqJ7wg3dmT8bAYZ3ZMswzoIdudd3dWxDleVrqKdJxRyvVqtzC7ioD9T_iHM4j8uFL_uRn2qN4SpK0_hJ6xFqtkfP_Zm9gG8oD3cok-gwYRzeVlZdo265tMkUOQdY09KFkoZuJ9z9-bo6JjQvD4-XFYRtaQb8NOpu4qBJjcvftPGR-WTfT2aNHlMYfz80ABk4IC4-h7yqMXHhNsIg-pf8X0X976yCFjZqxcbcPg043ALb9vQtLL4XAwBu7RanNgeB8DU8zm7XinKOmcR558qoI0_nrbnujGy8DcMT-e9iZ2qDQx5vimkYiIYYz5yhJIAh_z-8EqgcgyUQeSCBO3BNWFD_RgB&sig=AOD64_0KJccFKEDmEm821SpoVpqQl_qywg&client=ca-pub-4573231550355221&rf=4&nb=8&adurl=https://contiem.com/software/rsuite-ccms/%3Futm_term%3D%26utm_campaign%3DSOFTWARE%2B-%2BCCMS%2B%2526%2BContent%2BManagement%2B-%2BSearch%2B-%2B2026%26utm_source%3Dadwords%26utm_medium%3Dppc%26utm_id%3D24213408374%26hsa_acc%3D9074065578%26hsa_cam%3D24213408374%26hsa_grp%3D199380786146%26hsa_ad%3D823297325209%26hsa_src%3Dd%26hsa_tgt%3D%26hsa_kw%3D%26hsa_mt%3D%26hsa_net%3Dadwords%26hsa_ver%3D3%26gad_source%3D5%26gad_campaignid%3D24213408374%26gclid%3DEAIaIQobChMIgJX3irnjlgMVcoNjBh14gxuxEAEYASAAEgLhG_D_BwE
          - generic [ref=f4e26]:
            - link [ref=f4e28] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetyobP_03x2R5gK3laJ8wibdZpAKCsFyR_9v5cO-YEnyUsM1dfsG7-ay3B-M095HGTLbiw1GA1lap-230FnA4gHEnCQONaovZcXHphhSnVcHgPyDRwrvj90XbXb4P2ArRtloLkjEi54BKJ-VA9iQB6MXyvsuHiHWKqNnhVwToPFMaOtMgJRDCWqS6vMSaguKhvIbljjpHdAQz2ooE0JE5ZvSJcGbksbUA8TRy_AtkenjEZZA0IQTzLehINKolHfGYiDIUjLzEuWhH6B2XOGv30VBlXgWB8kehpQqHQXEV6ysCCkYKqvcdzj6OkaI78ZGd-YSpYIwIqNDEBZpPuQHZ7Mi7wJMi4Lwxy9jmGJK8gEANDl-epir_j3bRwLMb1K8X6RI5Irin04PPMItJuJRtlBv2i-hmoD_iEYV4x2ntkkGO6cGVCe0PEu1JUEfWdVAmx54jRAQsAujAg_xqGcO0MZ1yjew-oClB6x9NgKbN_-0xfjHFkp_ctu1263lCB8Gf3Rl6JHRt8Vq2_92Mrg09Xc_G9yvZNct8I44s1P1Y4msyXIZTfeq2HLRpntD8x5KJK38KiukWd13d4u0CsqXbMn7p1usTB4e8k4HCs9BkpWFNxKO-gF09LlJKHIa5MA7oWluC2CibzNxKZNrogW9h1Qvvo3HccUuI5fmS3wtkRcRtrHjFrSuvw7hSi4NSYo7xXHb4buKCK3CtGejk080L2L9dlt3v7YRJ4_wC5JDQKqmLCAe-Kzo5zgn4dStEZB_F6kvH01NMTbBa4t2snuWCJSFJs1g_ubzY0lS8PPvM9iPBPN262iY1AUt-Wu7_4Q-niPZg-iyckZabQexVmOnVLLBHA-0El4wnJIm9ueUSysnfmeDERRJ24oruh95mvpUQb9v6dP9U4BYdh7AAkBZk9cG46kXumPBTpWYWc84g9QGgSd6VTJwEU5W8KDGUXC8FrGW0JLFklziZuLoG4jtgweKBLd_aRdgVT2_RI73W8AUIFBUKCoEzxT8w783efd4xPHb7eYJoW-hW6By3L8-7MUQsASDH9MF7YxYkbmHHNgZtcF8aBJA59fU5yLNeZd9pk3JgsxJikr-9rGDxd9wch1wRt7WhjRHZyPjNV10tl1lphL4zrygXVs64QLdSdrgOTfnJe4BKkdJXxAWy_4_sEn7CF69k3uOQdaCjLeP2kF9iBDksWtG5_g3JDDZKk8Nip9TqfVLNcS-0Z1Gm3jlX7aNymapQFrxN2XRkxpro5C5v3bTNNfYQAKcJu1BRYWNgTp883C_zr4qOKWs8S56VGh7lKQNliQOb4VEgf-2KxOHdRWSlDZP_YHjtMks9p_1Ve2pU_YDHBPIIWZ3bGj0XL5Mgur-7sZuN3UOkrnHajbemFSUwHqt-5r2pS_ybedZyVpQ55PimcZlBw0fS6vYBPBGJPvWP_zH-moVmuErJO_TnGsfE2Z4KOrDyGmHGeGTvIAzZ2lgOzq_TEQ9Bo2uPL6zp-9HRVXd0aXAIMUJq3AoIGqoaT93OoHip8A7qdD9-eunF3TwhdZcIXjh-KmHd3rU4FV49qPeYK7lcs54NXq4F_nrEljvJrvpKHqhB9PZD-QN_T4RSV2Z_SQQ1axUucT7nbKoxXXenFxWc-49VnLJt-iqcpO8UqhHXnAv3PeWPPjxusUR6UpIhnTfYp5NoTZTSp3UxtPtHyWdOHzT19EJSMCXogKH7-SeRACBew1iMXqjHNKUKVQtqiXA-f8x2B4PchfLAa1imAKQaoA-_aqNqCvop1kFO4-Aj15w4ITy91izmmuz7soDEywMJWUm4WJuajbzMFqPHjWGIb48fvihwiutoduJWycPy7Jvf7Fvb7xYLq4d2eLWSZVLkfPeY-lZUezhuPC0xrWJRXkuqXSB1IjLOi2kPCXjhqYFIWw3cnupNm3FvM2fEdcY_34wcOd6z2YXA6jrKuCiMSkGJlLjyQJmRRNawYUEG8QCMclIi8L4QUF8QlahlpTYKsOD8DEkosb8ZYYME-U-M2qYE_-c37Ta9Iy3ALAA7Kq1_kcXd_e6x480W3sDvI0YXc7H3diFhsi8C-1HtOIw81vNewrFraVV_Xi3MIG3odXj5nq8wkmREuyvRwLq09X7mJxk0kPrlRWQBynCDvUdZCHTdgkUIHbiettfD21DpfNKDg-tgSH8HwKGMfFIXT_GZpaGy6IEHv6X3bNEuh3olD9DvD688WIFmTd1g-zrGLo0EQw6vJXqrzQ6qwQNDhRg5QlhpmBwZTUiYoJn85yob74d4ksmhrdYyCikVwqSOzkGTnIjeCE-Beg83N52TLhtAXee9tTlViDDJvmqKqPYlmA13jqcG6089qnZhgguruaMADa_x5IGAP6NsV8jZwmIFIMLIdW8BHDAgwn34gmitNvcYmQ-eBUlBhgNC6KSSuDOkRtcBtsuexHiBTRdDFfRp9QaE1KzS6Q8L11P30ntnPW-rR2Pl_9631b8ODJrUh4v-7FcRJLKnsuage8K4KFF-2F_oAgVL0tGWiYWRX8xln03j6-DDPvw7JKGYeR1QZ5lzzO7V9sTcyyWteU8TRFNL4c9csNUM3Asgpl-yapt7Aeju8Qq7093nuRTV5AeqIXnEs7pZbnCXIQEZAufJ4xTCwKzHGDS1_GkrdrTsmvpP2tchIeA36K63E2YKbeWx47qYPpvapO6yBw5sHnNoYUDihsjbwK5uGTje-d4N7BnNaOUUwcHrPRDoUfekL4btqmvwVlUIOCtlaUqV3zFMUuRSo8VOBviDwTFqaZT3U0GJB-UJbzLDVn6t1kYbOCFCkVfk5x38fJRsNtkMAWkQ4SHqxDkDry9y-FuK2wulP-N32WgR9LwNBUYHhjsxM7VjogzBoWmbx5v8przONuT14e5mwdimD6FVerYdDDRO9xQIEozROJZaVEB3WcCs5JEVquLOiFj_mxMWQnBi-VbBKjOTvCXoTY1sc7ZNyWyRW44Ygteb3WTFqvWbo2woAclM7sSzlHv1tlAB7dICqqkuAYZbZZqyQpaNzaswZRZ99nNXIFad63RHzJLQjedRMiySyxqKUIoha30YGohRXvBcKQz0sN9IPvQG-ycXE5ZNjHKK1BtNkPML2kc&opi=122715837
            - link [ref=f4e32] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetyobP_03x2R5gK3laJ8wibdZpAKCsFyR_9v5cO-YEnyUsM1dfsG7-ay3B-M095HGTLbiw1GA1lap-230FnA4gHEnCQONaovZcXHphhSnVcHgPyDRwrvj90XbXb4P2ArRtloLkjEi54BKJ-VA9iQB6MXyvsuHiHWKqNnhVwToPFMaOtMgJRDCWqS6vMSaguKhvIbljjpHdAQz2ooE0JE5ZvSJcGbksbUA8TRy_AtkenjEZZA0IQTzLehINKolHfGYiDIUjLzEuWhH6B2XOGv30VBlXgWB8kehpQqHQXEV6ysCCkYKqvcdzj6OkaI78ZGd-YSpYIwIqNDEBZpPuQHZ7Mi7wJMi4Lwxy9jmGJK8gEANDl-epir_j3bRwLMb1K8X6RI5Irin04PPMItJuJRtlBv2i-hmoD_iEYV4x2ntkkGO6cGVCe0PEu1JUEfWdVAmx54jRAQsAujAg_xqGcO0MZ1yjew-oClB6x9NgKbN_-0xfjHFkp_ctu1263lCB8Gf3Rl6JHRt8Vq2_92Mrg09Xc_G9yvZNct8I44s1P1Y4msyXIZTfeq2HLRpntD8x5KJK38KiukWd13d4u0CsqXbMn7p1usTB4e8k4HCs9BkpWFNxKO-gF09LlJKHIa5MA7oWluC2CibzNxKZNrogW9h1Qvvo3HccUuI5fmS3wtkRcRtrHjFrSuvw7hSi4NSYo7xXHb4buKCK3CtGejk080L2L9dlt3v7YRJ4_wC5JDQKqmLCAe-Kzo5zgn4dStEZB_F6kvH01NMTbBa4t2snuWCJSFJs1g_ubzY0lS8PPvM9iPBPN262iY1AUt-Wu7_4Q-niPZg-iyckZabQexVmOnVLLBHA-0El4wnJIm9ueUSysnfmeDERRJ24oruh95mvpUQb9v6dP9U4BYdh7AAkBZk9cG46kXumPBTpWYWc84g9QGgSd6VTJwEU5W8KDGUXC8FrGW0JLFklziZuLoG4jtgweKBLd_aRdgVT2_RI73W8AUIFBUKCoEzxT8w783efd4xPHb7eYJoW-hW6By3L8-7MUQsASDH9MF7YxYkbmHHNgZtcF8aBJA59fU5yLNeZd9pk3JgsxJikr-9rGDxd9wch1wRt7WhjRHZyPjNV10tl1lphL4zrygXVs64QLdSdrgOTfnJe4BKkdJXxAWy_4_sEn7CF69k3uOQdaCjLeP2kF9iBDksWtG5_g3JDDZKk8Nip9TqfVLNcS-0Z1Gm3jlX7aNymapQFrxN2XRkxpro5C5v3bTNNfYQAKcJu1BRYWNgTp883C_zr4qOKWs8S56VGh7lKQNliQOb4VEgf-2KxOHdRWSlDZP_YHjtMks9p_1Ve2pU_YDHBPIIWZ3bGj0XL5Mgur-7sZuN3UOkrnHajbemFSUwHqt-5r2pS_ybedZyVpQ55PimcZlBw0fS6vYBPBGJPvWP_zH-moVmuErJO_TnGsfE2Z4KOrDyGmHGeGTvIAzZ2lgOzq_TEQ9Bo2uPL6zp-9HRVXd0aXAIMUJq3AoIGqoaT93OoHip8A7qdD9-eunF3TwhdZcIXjh-KmHd3rU4FV49qPeYK7lcs54NXq4F_nrEljvJrvpKHqhB9PZD-QN_T4RSV2Z_SQQ1axUucT7nbKoxXXenFxWc-49VnLJt-iqcpO8UqhHXnAv3PeWPPjxusUR6UpIhnTfYp5NoTZTSp3UxtPtHyWdOHzT19EJSMCXogKH7-SeRACBew1iMXqjHNKUKVQtqiXA-f8x2B4PchfLAa1imAKQaoA-_aqNqCvop1kFO4-Aj15w4ITy91izmmuz7soDEywMJWUm4WJuajbzMFqPHjWGIb48fvihwiutoduJWycPy7Jvf7Fvb7xYLq4d2eLWSZVLkfPeY-lZUezhuPC0xrWJRXkuqXSB1IjLOi2kPCXjhqYFIWw3cnupNm3FvM2fEdcY_34wcOd6z2YXA6jrKuCiMSkGJlLjyQJmRRNawYUEG8QCMclIi8L4QUF8QlahlpTYKsOD8DEkosb8ZYYME-U-M2qYE_-c37Ta9Iy3ALAA7Kq1_kcXd_e6x480W3sDvI0YXc7H3diFhsi8C-1HtOIw81vNewrFraVV_Xi3MIG3odXj5nq8wkmREuyvRwLq09X7mJxk0kPrlRWQBynCDvUdZCHTdgkUIHbiettfD21DpfNKDg-tgSH8HwKGMfFIXT_GZpaGy6IEHv6X3bNEuh3olD9DvD688WIFmTd1g-zrGLo0EQw6vJXqrzQ6qwQNDhRg5QlhpmBwZTUiYoJn85yob74d4ksmhrdYyCikVwqSOzkGTnIjeCE-Beg83N52TLhtAXee9tTlViDDJvmqKqPYlmA13jqcG6089qnZhgguruaMADa_x5IGAP6NsV8jZwmIFIMLIdW8BHDAgwn34gmitNvcYmQ-eBUlBhgNC6KSSuDOkRtcBtsuexHiBTRdDFfRp9QaE1KzS6Q8L11P30ntnPW-rR2Pl_9631b8ODJrUh4v-7FcRJLKnsuage8K4KFF-2F_oAgVL0tGWiYWRX8xln03j6-DDPvw7JKGYeR1QZ5lzzO7V9sTcyyWteU8TRFNL4c9csNUM3Asgpl-yapt7Aeju8Qq7093nuRTV5AeqIXnEs7pZbnCXIQEZAufJ4xTCwKzHGDS1_GkrdrTsmvpP2tchIeA36K63E2YKbeWx47qYPpvapO6yBw5sHnNoYUDihsjbwK5uGTje-d4N7BnNaOUUwcHrPRDoUfekL4btqmvwVlUIOCtlaUqV3zFMUuRSo8VOBviDwTFqaZT3U0GJB-UJbzLDVn6t1kYbOCFCkVfk5x38fJRsNtkMAWkQ4SHqxDkDry9y-FuK2wulP-N32WgR9LwNBUYHhjsxM7VjogzBoWmbx5v8przONuT14e5mwdimD6FVerYdDDRO9xQIEozROJZaVEB3WcCs5JEVquLOiFj_mxMWQnBi-VbBKjOTvCXoTY1sc7ZNyWyRW44Ygteb3WTFqvWbo2woAclM7sSzlHv1tlAB7dICqqkuAYZbZZqyQpaNzaswZRZ99nNXIFad63RHzJLQjedRMiySyxqKUIoha30YGohRXvBcKQz0sN9IPvQG-ycXE5ZNjHKK1BtNkPML2kc&opi=122715837
          - generic [aria-hidden] [ref=f4e35] [cursor=pointer]
          - generic [ref=f4e48]:
            - generic [ref=f4e49] [cursor=pointer]
            - generic [ref=f4e53]: Ads by
            - generic [ref=f4e58]:
              - generic [ref=f4e59]: Ad options
              - generic [ref=f4e62]: Send feedback
              - link [ref=f4e66] [cursor=pointer]:
                - /url: https://adssettings.google.com/whythisad?source=display&reasons=ARXetyobP_03x2R5gK3laJ8wibdZpAKCsFyR_9v5cO-YEnyUsM1dfsG7-ay3B-M095HGTLbiw1GA1lap-230FnA4gHEnCQONaovZcXHphhSnVcHgPyDRwrvj90XbXb4P2ArRtloLkjEi54BKJ-VA9iQB6MXyvsuHiHWKqNnhVwToPFMaOtMgJRDCWqS6vMSaguKhvIbljjpHdAQz2ooE0JE5ZvSJcGbksbUA8TRy_AtkenjEZZA0IQTzLehINKolHfGYiDIUjLzEuWhH6B2XOGv30VBlXgWB8kehpQqHQXEV6ysCCkYKqvcdzj6OkaI78ZGd-YSpYIwIqNDEBZpPuQHZ7Mi7wJMi4Lwxy9jmGJK8gEANDl-epir_j3bRwLMb1K8X6RI5Irin04PPMItJuJRtlBv2i-hmoD_iEYV4x2ntkkGO6cGVCe0PEu1JUEfWdVAmx54jRAQsAujAg_xqGcO0MZ1yjew-oClB6x9NgKbN_-0xfjHFkp_ctu1263lCB8Gf3Rl6JHRt8Vq2_92Mrg09Xc_G9yvZNct8I44s1P1Y4msyXIZTfeq2HLRpntD8x5KJK38KiukWd13d4u0CsqXbMn7p1usTB4e8k4HCs9BkpWFNxKO-gF09LlJKHIa5MA7oWluC2CibzNxKZNrogW9h1Qvvo3HccUuI5fmS3wtkRcRtrHjFrSuvw7hSi4NSYo7xXHb4buKCK3CtGejk080L2L9dlt3v7YRJ4_wC5JDQKqmLCAe-Kzo5zgn4dStEZB_F6kvH01NMTbBa4t2snuWCJSFJs1g_ubzY0lS8PPvM9iPBPN262iY1AUt-Wu7_4Q-niPZg-iyckZabQexVmOnVLLBHA-0El4wnJIm9ueUSysnfmeDERRJ24oruh95mvpUQb9v6dP9U4BYdh7AAkBZk9cG46kXumPBTpWYWc84g9QGgSd6VTJwEU5W8KDGUXC8FrGW0JLFklziZuLoG4jtgweKBLd_aRdgVT2_RI73W8AUIFBUKCoEzxT8w783efd4xPHb7eYJoW-hW6By3L8-7MUQsASDH9MF7YxYkbmHHNgZtcF8aBJA59fU5yLNeZd9pk3JgsxJikr-9rGDxd9wch1wRt7WhjRHZyPjNV10tl1lphL4zrygXVs64QLdSdrgOTfnJe4BKkdJXxAWy_4_sEn7CF69k3uOQdaCjLeP2kF9iBDksWtG5_g3JDDZKk8Nip9TqfVLNcS-0Z1Gm3jlX7aNymapQFrxN2XRkxpro5C5v3bTNNfYQAKcJu1BRYWNgTp883C_zr4qOKWs8S56VGh7lKQNliQOb4VEgf-2KxOHdRWSlDZP_YHjtMks9p_1Ve2pU_YDHBPIIWZ3bGj0XL5Mgur-7sZuN3UOkrnHajbemFSUwHqt-5r2pS_ybedZyVpQ55PimcZlBw0fS6vYBPBGJPvWP_zH-moVmuErJO_TnGsfE2Z4KOrDyGmHGeGTvIAzZ2lgOzq_TEQ9Bo2uPL6zp-9HRVXd0aXAIMUJq3AoIGqoaT93OoHip8A7qdD9-eunF3TwhdZcIXjh-KmHd3rU4FV49qPeYK7lcs54NXq4F_nrEljvJrvpKHqhB9PZD-QN_T4RSV2Z_SQQ1axUucT7nbKoxXXenFxWc-49VnLJt-iqcpO8UqhHXnAv3PeWPPjxusUR6UpIhnTfYp5NoTZTSp3UxtPtHyWdOHzT19EJSMCXogKH7-SeRACBew1iMXqjHNKUKVQtqiXA-f8x2B4PchfLAa1imAKQaoA-_aqNqCvop1kFO4-Aj15w4ITy91izmmuz7soDEywMJWUm4WJuajbzMFqPHjWGIb48fvihwiutoduJWycPy7Jvf7Fvb7xYLq4d2eLWSZVLkfPeY-lZUezhuPC0xrWJRXkuqXSB1IjLOi2kPCXjhqYFIWw3cnupNm3FvM2fEdcY_34wcOd6z2YXA6jrKuCiMSkGJlLjyQJmRRNawYUEG8QCMclIi8L4QUF8QlahlpTYKsOD8DEkosb8ZYYME-U-M2qYE_-c37Ta9Iy3ALAA7Kq1_kcXd_e6x480W3sDvI0YXc7H3diFhsi8C-1HtOIw81vNewrFraVV_Xi3MIG3odXj5nq8wkmREuyvRwLq09X7mJxk0kPrlRWQBynCDvUdZCHTdgkUIHbiettfD21DpfNKDg-tgSH8HwKGMfFIXT_GZpaGy6IEHv6X3bNEuh3olD9DvD688WIFmTd1g-zrGLo0EQw6vJXqrzQ6qwQNDhRg5QlhpmBwZTUiYoJn85yob74d4ksmhrdYyCikVwqSOzkGTnIjeCE-Beg83N52TLhtAXee9tTlViDDJvmqKqPYlmA13jqcG6089qnZhgguruaMADa_x5IGAP6NsV8jZwmIFIMLIdW8BHDAgwn34gmitNvcYmQ-eBUlBhgNC6KSSuDOkRtcBtsuexHiBTRdDFfRp9QaE1KzS6Q8L11P30ntnPW-rR2Pl_9631b8ODJrUh4v-7FcRJLKnsuage8K4KFF-2F_oAgVL0tGWiYWRX8xln03j6-DDPvw7JKGYeR1QZ5lzzO7V9sTcyyWteU8TRFNL4c9csNUM3Asgpl-yapt7Aeju8Qq7093nuRTV5AeqIXnEs7pZbnCXIQEZAufJ4xTCwKzHGDS1_GkrdrTsmvpP2tchIeA36K63E2YKbeWx47qYPpvapO6yBw5sHnNoYUDihsjbwK5uGTje-d4N7BnNaOUUwcHrPRDoUfekL4btqmvwVlUIOCtlaUqV3zFMUuRSo8VOBviDwTFqaZT3U0GJB-UJbzLDVn6t1kYbOCFCkVfk5x38fJRsNtkMAWkQ4SHqxDkDry9y-FuK2wulP-N32WgR9LwNBUYHhjsxM7VjogzBoWmbx5v8przONuT14e5mwdimD6FVerYdDDRO9xQIEozROJZaVEB3WcCs5JEVquLOiFj_mxMWQnBi-VbBKjOTvCXoTY1sc7ZNyWyRW44Ygteb3WTFqvWbo2woAclM7sSzlHv1tlAB7dICqqkuAYZbZZqyQpaNzaswZRZ99nNXIFad63RHzJLQjedRMiySyxqKUIoha30YGohRXvBcKQz0sN9IPvQG-ycXE5ZNjHKK1BtNkPML2kc&opi=122715837
                - generic [ref=f4e67]: Why this ad?
          - generic [ref=f4e70]:
            - generic [ref=f4e71] [cursor=pointer]: Not interested in this ad
            - generic [ref=f4e74] [cursor=pointer]: Seen this ad multiple times
            - generic [ref=f4e77] [cursor=pointer]: Ad was inappropriate
            - generic [ref=f4e80] [cursor=pointer]: Ad covered content
          - generic [ref=f4e83]: Thanks. Feedback improves Google ads
          - generic [ref=f4e89]: Ad closed by
          - generic [ref=f4e102]:
            - generic [ref=f4e103] [cursor=pointer]
            - generic [ref=f4e107]:
              - generic [ref=f4e109]:
                - text: Personalize ads on this site
                - generic [ref=f4e111] [cursor=pointer]
              - link [ref=f4e113] [cursor=pointer]:
                - /url: https://support.google.com/ads/answer/10923348
                - generic [ref=f4e114]: Learn more
  - contentinfo [ref=e165]:
    - generic [ref=e166]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | 
  4  | test('Radio Button Example', async ({ page }) => {
  5  |     await page.goto('https://demoqa.com/radio-button');
  6  |     await page.locator('label[for="yesRadio"]').click();
  7  |     await page.pause()
  8  |     await expect(page.locator('.text-success')).toHaveText('Yes');
  9  | });
  10 | 
  11 | test.only('Checkbox Example', async ({ page }) => {
  12 |     test.setTimeout(5000)
  13 |     await page.goto('https://demoqa.com/checkbox');
  14 |     // Expand all
  15 |     await page.locator('.rc-tree-switcher').click();
  16 |     await page.pause()
  17 |     // Select Downloads checkbox
  18 |     //await page.locator('//span[@class="rc-tree-title"]');
  19 |    // await page.pause()
> 20 |     await expect(page.locator('//span[@class="rc-tree-title"]')).toContainText('Downloads');
     |                                                                  ^ Error: expect(locator).toContainText(expected) failed
  21 | });
```