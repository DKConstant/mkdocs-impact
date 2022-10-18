# Preparing to install or update Service Impact

This section describes how to prepare to install or update Service Impact, and provides instructions for downloading
and staging required software.

The following list outlines recommended best practices for installing or
upgrading Service Impact:

-   Review the [release notes](/not-migrated.html) for
    this release before proceeding. The latest information is provided
    there.
-   Use [screen](https://linux.die.net/man/1/screen){.external-link},
    [tmux](https://linux.die.net/man/1/tmux){.external-link}, or a
    similar program to establish sessions on the master host. If you
    become disconnected, the commands you initiate will continue to run.
-   Review the procedures in this section before performing them. Every
    effort is made to avoid mistakes and anticipate needs; nevertheless,
    the instructions may be incorrect or inadequate for some
    requirements or environments.

## Downloading required files

To perform this procedure, you need:

-   A workstation with internet access.
-   Permission to download files from
    [delivery.zenoss.io](https://delivery.zenoss.io){.external-link}.
    To request permission, file a ticket at the [Zenoss Support](https://support.zenoss.com/){.external-link} site.
-   The names of the files to download. The files are listed in the
    [release notes](/not-migrated.html).
-   A secure network copy program.

Follow these steps:

1.  In a web browser, navigate to
    [delivery.zenoss.io](https://delivery.zenoss.io){.external-link},
    and then log in.
2.  Download the Docker image file for Service Impact.
    -   `install-zenoss-impact_ VERSION                .run`

    Replace Version with the most recent version number available on the
    download page.
3.  Download the Service Impact ZenPack files.
    -   `ZenPacks.zenoss.ImpactServer-                 VERSION                -py2.7.egg`
    -   `ZenPacks.zenoss.Impact-                 VERSION                -py2.7.egg`

    Replace Version with the most recent version number available on the
    download page.
4.  Use a secure copy program to copy the Docker image file and the
    ZenPack files to the Control Center master host.

## Staging required files on the master host

To perform this procedure, you need permission to log in to the Control
Center master host as root, or as a user with superuser privileges.
Use this procedure to install the Docker image and to prepare the
ZenPack files for installation.

1.  Log in to the Control Center master host as root, or as a user with
    superuser privileges.
2.  Stage the Docker image file and ZenPack files in `/tmp`.
    1.  Create a directory in `/tmp` for the files. The
        directory must be local (not mounted) and must be readable,
        writable, and executable by all users. For example,
        `/tmp/impact`.

        ```sh
        mkdir /tmp/impact
        ```

    2.  Copy or move the Docker image file and ZenPack files to
        `/tmp/impact`.

        !!! warning
            Do not change the file names during the move or copy.

    3.  Change the file permissions. The files must have the same
        permissions as their parent directory.

        ```sh
        chmod -R 777 /tmp/impact
        ```

3.  Install the Service Impact image.
    1.  Change to the directory in which the Service Impact image is
        located.

        ```sh
        cd /tmp/impact
        ```

    2.  Install the image.

        ```sh
        yes | ./install-zenoss-impact_*.run
        ```

[ Like ](/not-migrated.html){.like-button}


