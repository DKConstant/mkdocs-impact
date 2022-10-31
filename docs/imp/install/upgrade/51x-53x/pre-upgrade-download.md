# Downloading and staging 5.5.x packages

To perform this procedure, you need:

-   A workstation with internet access.
-   Permission to download files from
    [delivery.zenoss.io](https://delivery.zenoss.io){.external-link}.
    To request permission, file a ticket at the [Zenoss Support](https://support.zenoss.com/){.external-link} site.
-   A secure network copy program.

Follow these steps:

1.  In a web browser, navigate to the download site, and then log in.
    The download site is
    [delivery.zenoss.io](https://delivery.zenoss.io){.external-link}.

2.  Download the Docker image file for Service Impact.
    -   `install-zenoss-impact_ VERSION              .run`

    Replace VERSION with the most recent version number available on the
    download page.

3.  Download the Service Impact ZenPack files.
    -   `ZenPacks.zenoss.ImpactServer-               VERSION              -py2.7.egg`
    -   `ZenPacks.zenoss.Impact-               VERSION              -py2.7.egg`

    Replace VERSION with the most recent version number available on the
    download page.

4.  Use a secure copy program to copy the Docker image file and the
    ZenPack files to the Control Center master host.

    !!! warning
        Do not change the file names during the copy.

5.  Log in to the Control Center master host as root, or as a user with
    superuser privileges.

6.  Stage the Docker image file and ZenPack files in `/tmp`.
    1.  Create a directory in `/tmp` for the files.
        The directory must be local (not mounted) and must be readable,
        writable, and executable by all users. For example,
        `/tmp/impact`.

        ```sh
        mkdir /tmp/impact
        ```

    2.  Copy or move the Docker image file and ZenPack files to
        `/tmp/impact`.

    3.  Change the file permissions.
        The files must have the same permissions as their parent
        directory.

        ```sh
        chmod -R 777 /tmp/impact
        ```


